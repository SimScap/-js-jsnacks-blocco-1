/**
 *
Chiedi un numero di 7 cifre all'utente
e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

// inizializzare le variabili nel prompt(dialogo) 
const number = prompt("dammi un numero di 7 cifre");

//dare una variabile uguale a zero così da incrementare dopo
let sum = 0;

//ciclo for per calcola la somma di tutte le cifre che compongono il numero.
for (let i = 0; i < number.length; i++) {
    sum += parseInt(number.charAt(i));
}
//stampare fuori dal ciclo for
console.log(sum);