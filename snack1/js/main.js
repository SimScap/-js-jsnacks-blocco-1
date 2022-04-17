/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */



/* inizializzare le variabili nel prompt(dialogo) e aggiungere un parseint per essere sicuri che sono numeri interi */

let numberOne = parseInt(prompt("Please enter your first number"));
console.log(numberOne);
let numberTwo = parseInt(prompt("Please enter your second number"));
console.log(numberTwo);

//controllare se non sono numeri
if (isNaN(numberOne) || (isNaN(numberTwo))) {
    console.log("i numeri non sono validi");
} //controllare se un numero è maggiore dell'altro 
else if (numberOne > numberTwo) {
    console.log(numberOne);
} else if (numberOne < numberTwo) {
    console.log(numberTwo);
} else {
    console.log("avete scelto lo stesso numero");
}