import { CATEGORIAS } from '../lib/candidatos.js';
import { redis, CHAVE } from '../lib/db.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const senha = process.env.SENHA_RESULTADO;
  if (!senha) return res.status(500).json({ erro: 'Defina SENHA_RESULTADO nas variáveis da Vercel.' });
  if ((req.headers['x-senha'] || '') !== senha) return res.status(401).json({ erro: 'Senha errada.' });
  try {
    if (req.method === 'DELETE') {
      const id = String(req.query.id || '');
      if (!id) return res.status(400).json({ erro: 'Falta o eleitor.' });
      await redis('HDEL', CHAVE, id);
      return res.status(200).json({ ok: true });
    }
    const flat = (await redis('HGETALL', CHAVE)) || [];
    const eleitores = [];
    for (let i = 0; i < flat.length; i += 2) {
      const d = JSON.parse(flat[i + 1]);
      eleitores.push({ id: flat[i], nome: d.nome, ts: d.ts, votos: d.votos });
    }
    eleitores.sort((a, b) => a.ts.localeCompare(b.ts));
    const placar = CATEGORIAS.map((c) => {
      const cont = {};
      eleitores.forEach((e) => (e.votos[c.k] || []).forEach((n) => (cont[n] = (cont[n] || 0) + 1)));
      return { k: c.k, t: c.t, n: c.n, ranking: Object.entries(cont).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'pt')) };
    });
    res.status(200).json({ total: eleitores.length, placar, eleitores });
  } catch (e) {
    res.status(500).json({ erro: e.message || 'Erro ao ler.' });
  }
}
