import { CANDIDATOS, CATEGORIAS } from '../lib/candidatos.js';
import { redis, normaliza, CHAVE } from '../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ erro: 'Use POST.' });
  try {
    const b = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const nome = String(b.nome || '').replace(/\s+/g, ' ').trim().slice(0, 40);
    const disp = String(b.disp || '').slice(0, 64);
    if (nome.length < 2) return res.status(400).json({ erro: 'Escreva seu nome.' });
    if (!disp) return res.status(400).json({ erro: 'Recarregue a página e tente de novo.' });

    const votos = {};
    for (const c of CATEGORIAS) {
      const v = Array.isArray(b.votos?.[c.k]) ? [...new Set(b.votos[c.k])] : [];
      const validos = v.filter((n) => CANDIDATOS.some((p) => p.n === n && c.g.includes(p.g)));
      if (validos.length !== c.n || validos.length !== v.length)
        return res.status(400).json({ erro: `Confira a categoria "${c.t}".` });
      votos[c.k] = validos;
    }

    const id = normaliza(nome);
    const antigo = await redis('HGET', CHAVE, id);
    if (antigo) {
      const a = JSON.parse(antigo);
      if (a.disp !== disp)
        return res.status(409).json({ erro: `Já existe um voto com o nome "${a.nome}". Se foi você em outro celular, fale com o Renato.` });
    }
    await redis('HSET', CHAVE, id, JSON.stringify({ nome, disp, votos, ts: new Date().toISOString() }));
    res.status(200).json({ ok: true, atualizado: !!antigo });
  } catch (e) {
    res.status(500).json({ erro: e.message || 'Erro ao gravar.' });
  }
}
