/*
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
 */

const output = document.getElementById("output");
let somma = 0;

const listaZucchine = [
  {
    varieta: "romanesco",
    peso: 301,
    lunghezza: 31
  },
  {
    varieta: "fiorentino",
    peso: 250,
    lunghezza: 27
  },
  {
    varieta: "napoletana",
    peso: 275,
    lunghezza: 34
  },
  {
    varieta: "tonde",
    peso: 263,
    lunghezza: 30
  },
  {
    varieta: "trombetta",
    peso: 287,
    lunghezza: 29
  },
  {
    varieta: "pâtisson",
    peso: 311,
    lunghezza: 33
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
    lunghezza: 35
  },
  {
    varieta: "con OGM",
    peso: 300,
    lunghezza: 26
  }
];

for(let zucchina of listaZucchine){
  somma += zucchina.peso;
}

output.innerHTML = somma + " gr.";