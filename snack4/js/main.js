/**
 *
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */


//inizializzare un array
const guests = ["Giovanni", "Giuseppe", "Francesco", "Carolina", "Ilaria", "Francesca"];
//aprire un dialogo che scriviamo i nomi 
//(lowercase serve per i nomi con la maiuscola)
//(trim per eliminare lo spazio davanti e dietro la parola)
const partecipant = prompt("dimmi il nome dei partecipanti").toLowerCase().trim();

// ! verifica manuale con ciclo for
let isGuest = false;

//scorro tutta la lista degli invitati
for (let i = 0; i < guests.length; i++) {
    if (guests[i].toLowerCase() === partecipant) {
        isGuest = true;
    }
    console.log(guests[i]);
}


// verificare se nella lista ci sta quel nome
if (isGuest) {
    console.log("il nome inserito è tra gli invitati");
} else {
    console.log("il nome inserito non è tra gli invitati");
}

//let indexGuest = guests.indexOf(partecipant);

/* 
 //senza ciclo for con indexOf  
 //(il minore di 1 significa che non esiste quindi
 // visto che è diverso allora significa che esiste il nome nell'array)
if (guests.indexOf(partecipant) > -1){
    console.log("il nome inserito è tra gli invitati");
}else{
    console.log("il nome inserito non è tra gli invitati");
} */
/* 
 //senza ciclo for con includes(funziona con i booleani
 // e quindi significa che se guest è uguale a partecipant) 
if (guest.includes(partecipant)){
    console.log("il nome inserito è tra gli invitati");
}else{
    console.log("il nome inserito non è tra gli invitati");
} */