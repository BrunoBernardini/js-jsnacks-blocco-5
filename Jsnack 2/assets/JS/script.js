/*
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const output = document.getElementById("output");

const arrayMinori = [], arrayMaggiori = [];
let pesoMinori = 0, pesoMaggiori = 0;

const listaZucchine = [
  {
    varieta: "romanesco",
    peso: 301,
    lunghezza: 11
  },
  {
    varieta: "fiorentino",
    peso: 250,
    lunghezza: 27
  },
  {
    varieta: "napoletana",
    peso: 275,
    lunghezza: 14
  },
  {
    varieta: "tonde",
    peso: 263,
    lunghezza: 10
  },
  {
    varieta: "trombetta",
    peso: 287,
    lunghezza: 29
  },
  {
    varieta: "pâtisson",
    peso: 311,
    lunghezza: 13
  },
  {
    varieta: "giallo",
    peso: 304,
    lunghezza: 24
  },
  {
    varieta: "rugoso friulano",
    peso: 293,
    lunghezza: 37
  },
  {
    varieta: "Crookneck",
    peso: 350,
    lunghezza: 15
  },
  {
    varieta: "con OGM",
    peso: 300,
    lunghezza: 26
  }
];

for(let zucchina of listaZucchine){
  if(zucchina.lunghezza<=15) arrayMinori.push(zucchina);
  else arrayMaggiori.push(zucchina);
}

console.log(arrayMinori);
console.log(arrayMaggiori);

for(let zucchina of arrayMinori){
  pesoMinori += zucchina.peso;
}

for(let zucchina of arrayMaggiori){
  pesoMaggiori += zucchina.peso;
}

output.innerHTML = `Peso zucchine minori: ${pesoMinori}; Peso zucchine maggiori: ${pesoMaggiori}`;