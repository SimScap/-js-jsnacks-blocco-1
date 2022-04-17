/**
 * 
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
 * 
 */

//array vuota 
let listNumber = [];

//ciclo for per trovare un numero intero dispari 
//e che non sia una stringa con isnan
for (let i = 0; i < 6; i++) {
    const currentNumber = parseInt(prompt("inserisci un nuovo numero"));
    if ((!isNaN(currentNumber)) && (currentNumber % 2 == 1)) {
        listNumber.push(currentNumber);
    }
}

//stampare la lista dei numeri
console.log(listNumber);