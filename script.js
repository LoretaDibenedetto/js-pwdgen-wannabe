//creo variabili con dei prompt



const nome = prompt("inserisci il tuo nome:");
const lastName = prompt("inserisci il tuo cognome:");
let preferColor = prompt("inserisci il tuo colore preferito:")

//salvo un numero in una variabile
let unStaticNum = 21;



let num1 = prompt("inserisci la prima cifra:");

//rendo questa stringa un numero intero
num1 = parseInt(num1);

let num2 = prompt("inserisci la seconda cifra:");

//rendo questa stringa un numero intero
num2 = parseInt(num2);

//divido i due valori presi dai prompt
let div = num1 / num2; 

//genera numero casuale preso dal numero fisso (staticNum)
//la funzione math.floor arrotonda quello che sta nella parentesi per difetto
//la funzione math.random ritorna un numero randomico in questo caso fino a 100
unStaticNum = Math.floor(Math.random()*100);


//racchiudo in una variabile il template literal
let passwordGenerator = `

 ${nome}${lastName}${preferColor}${unStaticNum}${div}


`;

console.log("generatore di password:"+" "+ passwordGenerator);

//aggiungo nell html
let password =document.getElementById("password");

password.innerText = passwordGenerator;

