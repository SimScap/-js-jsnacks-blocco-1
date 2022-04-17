/**
 * 
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */



/* inizializzare le variabili nel prompt(dialogo) e inserirlo nell html */
let wordOne = prompt("Please enter your first word");
document.getElementById("first-person").innerHTML += wordOne;

let wordTwo = prompt("Please enter your first word");
document.getElementById("second-person").innerHTML += wordTwo;

let minResult = document.getElementById("min-result");
let maxResult = document.getElementById("max-result");

//controllare se una parola è più lunga dell'altra
if (wordOne.length > wordTwo.length) {
    maxResult.innerHTML += wordOne;
    minResult.innerHTML += wordTwo;
} else if (wordTwo.length > wordOne.length) {
    maxResult.innerHTML += wordTwo;
    minResult.innerHTML += wordOne;
} else {
    minResult.innerHTML = "le parole sono della stessa lunghezza";
    maxResult.innerHTML = "le parole sono della stessa lunghezza";
}