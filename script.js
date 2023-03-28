//creo variabili con dei prompt



const nome = prompt("inserisci il tuo nome:");
const lastName = prompt("inserisci il tuo cognome:");
let preferColor = prompt("inserisci il tuo colore preferito:")

let staticNum = 21;

let num1 = prompt("inserisci il primo numero:");
let num2 = prompt("inserisci il secondo numero:");

let div = num1 / num2; 

let visitCard = `
----------------------------------------------------
nome: ${nome},
cognome: ${lastName},
colore preferito: ${preferColor}, 
numero ${staticNum}, 

se fai una divisione tra ${num1} e ${num2} il risultato e': ${div}
-----------------------------------------------------

`;

console.log(visitCard);
