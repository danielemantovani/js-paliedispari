/**
 * Verifica se la parola è palindroma
 * @param {string}
 * @returns {boolean}
 */
// Creo la funzione per verificare che la parola inserita dall'utente sia una parola palindtroma

function isPalindrome(word) {

    //Rendo la parola inserita key sensitive
    word = word.toLowerCase();

    //Imposto una variabile flag di base falsa per il controllo finale della parola
    let check = false

    // Inverto la parola utilizzando prima split per dividere la parola e prendere carattere per carattere, successivamente uso reverse per invertire le lettere e infine uso join per ricomporre la parola al contrario
    let inverseWord = word.split("").reverse("").join("");
    
    // Verifico se la parola originale è uguale alla sua versione invertita
    if (word === inverseWord) {
        check = true;
    }

    return check
}
