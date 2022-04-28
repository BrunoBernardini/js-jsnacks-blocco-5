/*
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
 */

const inputText = document.getElementById("inputText");
const inputBtn = document.getElementById("inputBtn");
const output = document.getElementById("output");

const reverseString = (stringa) => stringa.split("").reverse().join("");

inputBtn.addEventListener("click", init);

function init(){
  output.innerHTML = reverseString(inputText.value);
}

