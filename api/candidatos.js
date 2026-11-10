import { CANDIDATOS, CATEGORIAS } from '../lib/candidatos.js';
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ candidatos: CANDIDATOS, categorias: CATEGORIAS });
}
