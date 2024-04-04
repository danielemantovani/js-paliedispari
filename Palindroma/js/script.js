// test
// alert ("Palindroma");

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

const word = prompt ("Digita una parola e ti dirò se è palindroma");
console.log (word);

let result = "";

// Verifica se la parola inserita è palindroma
if (isPalindrome(word)) {
    result = ("Hai inserito" + " " + word + " " + "una parola palindroma");
} else {
    result = ("Hai inserito" + " " + word + " " + "una parola non palindroma" );
}

//Stampo il risultato in pagina
document.getElementById("result").innerHTML = result;
