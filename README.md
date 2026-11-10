# Craques de Aldeia – Melhores de 2026

Votação dos melhores do ano da pelada.

- `/` – página de voto (um voto por nome; dá para mudar o voto no mesmo celular)
- `/resultado.html` – placar e lista de eleitores, protegido por senha

Na Vercel:
1. Banco: Storage → Upstash Redis (plano grátis) ligado a este projeto.
2. Variável de ambiente `SENHA_RESULTADO` com a senha do placar.

Candidatos e categorias ficam em `lib/candidatos.js`.
