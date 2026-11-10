// Candidatos e categorias da eleição. Para mudar alguém de categoria, edite "g".
// g: DEF zagueiro, ATA atacante, MO meia ofensivo, MD meia defensivo, GOL goleiro
export const CANDIDATOS = [
{
"n": "Aldo",
"g": "DEF",
"f": "fotos/aldo.jpg"
},
{
"n": "Cara de Pedra",
"g": "DEF",
"f": "fotos/cara-de-pedra.jpg"
},
{
"n": "Dimas",
"g": "MO",
"f": "fotos/dimas.jpg"
},
{
"n": "Dultra",
"g": "DEF",
"f": "fotos/dultra.jpg"
},
{
"n": "Flavio",
"g": "ATA",
"f": "fotos/flavio.jpg"
},
{
"n": "Franklin",
"g": "MO",
"f": "fotos/franklin.jpg"
},
{
"n": "Gileno",
"g": "MO",
"f": "fotos/gileno.jpg"
},
{
"n": "Guga",
"g": "MD",
"f": "fotos/guga.jpg"
},
{
"n": "Guilherme Xuxa",
"g": "MO",
"f": "fotos/guilherme-xuxa.jpg"
},
{
"n": "Hadriel",
"g": "MD",
"f": "fotos/hadriel.jpg"
},
{
"n": "Henrique Predador",
"g": "MO",
"f": "fotos/henrique-predador.jpg"
},
{
"n": "Huga",
"g": "DEF",
"f": "fotos/huga.jpg"
},
{
"n": "Hugo",
"g": "MO",
"f": "fotos/hugo.jpg"
},
{
"n": "Hulk",
"g": "ATA",
"f": "fotos/hulk.jpg"
},
{
"n": "Jailton",
"g": "MD",
"f": "fotos/jailton.jpg"
},
{
"n": "Jeová Melo",
"g": "DEF",
"f": "fotos/jeova-melo.jpg"
},
{
"n": "Luizinho",
"g": "DEF",
"f": "fotos/luizinho.jpg"
},
{
"n": "Marcelo Lemos",
"g": "MO",
"f": "fotos/marcelo-lemos.jpg"
},
{
"n": "Marcelo Santos",
"g": "MO",
"f": "fotos/marcelo-santos.jpg"
},
{
"n": "Marcelão",
"g": "ATA",
"f": "fotos/marcelao.jpg"
},
{
"n": "Marlon",
"g": "MO",
"f": "fotos/marlon.jpg"
},
{
"n": "Miguel",
"g": "DEF",
"f": "fotos/miguel.jpg"
},
{
"n": "Nilton",
"g": "MD",
"f": "fotos/nilton.jpg"
},
{
"n": "Niwton Bunito",
"g": "MO",
"f": "fotos/niwton-bunito.jpg"
},
{
"n": "Paulinho Ramalho",
"g": "ATA",
"f": "fotos/paulinho-ramalho.jpg"
},
{
"n": "Renatinho",
"g": "MD",
"f": "fotos/renatinho.jpg"
},
{
"n": "Renato Gigante",
"g": "ATA",
"f": "fotos/renato-gigante.jpg"
},
{
"n": "Ricardo",
"g": "DEF",
"f": "fotos/ricardo.jpg"
},
{
"n": "Riva",
"g": "DEF",
"f": "fotos/riva.jpg"
},
{
"n": "Roberto Doido",
"g": "MD",
"f": "fotos/roberto-doido.jpg"
},
{
"n": "Romilson",
"g": "ATA",
"f": "fotos/romilson.jpg"
},
{
"n": "Rubinho",
"g": "MD",
"f": "fotos/rubinho.jpg"
},
{
"n": "Tonho",
"g": "ATA",
"f": "fotos/tonho.jpg"
},
{
"n": "Zé Hildo",
"g": "DEF",
"f": "fotos/ze-hildo.jpg"
},
{
"n": "Adelson",
"g": "GOL",
"f": "fotos/adelson.jpg"
},
{
"n": "Felipe Doido",
"g": "GOL",
"f": "fotos/felipe-doido.jpg"
},
{
"n": "Jair",
"g": "GOL",
"f": "fotos/jair.jpg"
},
{
"n": "Jessé",
"g": "GOL",
"f": "fotos/jesse.jpg"
},
{
"n": "João Pedro",
"g": "GOL",
"f": "fotos/joao-pedro.jpg"
}
];

export const CATEGORIAS = [
  { k: 'Z',  t: '2 melhores zagueiros',  n: 2, g: ['DEF'] },
  { k: 'A',  t: '2 melhores atacantes',  n: 2, g: ['ATA'] },
  { k: 'MO', t: 'Melhor meia ofensivo',  n: 1, g: ['MO'] },
  { k: 'MD', t: 'Melhor meia defensivo', n: 1, g: ['MD'] },
  { k: 'G',  t: 'Melhor goleiro',        n: 1, g: ['GOL'] },
  { k: 'CR', t: 'Craque do ano',         n: 1, g: ['DEF', 'ATA', 'MO', 'MD'] },
];
