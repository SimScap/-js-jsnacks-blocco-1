/**
 * 
Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */


//inizializzare una variabile che poi si somma
let sum = 0;

//ciclo for per chiedere al prompt 10 volte vari numeri
for (let i = 0; i < 10; i++) {
    const currentNumber = parseInt(prompt("inserisci un nuovo numero"));
    //+= per aggiungere ogni volta un numero in più
    sum += currentNumber;
}

//stampare in console il risultato fuori dal ciclo
console.log(sum);