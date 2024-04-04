//test
// alert ("Pari e dispari")

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//L'utente sceglie se pari o dispari, se non inserisce pari o dispari gli verrà chiesto ancora di scegliere 
let evenOdd;

while (evenOdd !== "pari" && evenOdd !== "dispari") {
    evenOdd = prompt("Scegli pari o dispari")
    console.log(evenOdd);
}

const userNum = parseInt (prompt("Inserisci un numero da 1 a 5"));
console.log (userNum);

const pcNum = Math.floor (Math.random () * 5) + 1;
console.log (pcNum);

let total = userNum + pcNum;
console.log (total);