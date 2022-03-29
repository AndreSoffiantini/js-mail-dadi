/********* ESERCIZIO 1 **********/

// Chiedere all'utente la mail

const userMail = prompt("Inserisci la tua mail");
console.log(userMail);

// Definire una lista di utenti ammessi

const validMails = ["mail.valida1@email.com", "mail.valida2@email.com", "mail.valida3@email.com"];

// Controllare che sia nella lista di utenti ammessi

// Impostare una variabile di controllo booleana che verifichi l'ammissibilità dell'utente
let validUser = false;

for (let i = 0; i < validMails.length; i++) {

    let validMail = validMails[i];

    // La variabile di controllo assume valore true se la userMail è uguale ad almeno una validMail, altrimenti rimane false
    if (userMail === validMail) {

        validUser = true;

    }

}

console.log(validUser);

// Stampare messaggio di esito del controllo

if (validUser) {

    alert(`Utente ${userMail} ammesso`);

} else if (!validUser) {

    alert(`Utente ${userMail} non ammesso`);

}


/********* ESERCIZIO 2 **********/

// Generare un numero random tra 1 e 6 per il giocatore, poi stamparlo a schermo

const userNumber = Math.round(1 + 5 * Math.random());
console.log(userNumber);
document.getElementById("userScore").innerHTML = `Il tuo punteggio è ${userNumber}`;

// Generare un numero random tra 1 e 6 per il computer, poi stamparlo a schermo

const computerNumber = Math.round(1 + 5 * Math.random());
console.log(computerNumber);
document.getElementById("computerScore").innerHTML = `Il punteggio del computer è ${computerNumber}`;

// Stabilire il punteggio più alto, che sarà il vincitore

let winner = document.getElementById("winner");

if (userNumber > computerNumber) {

    // Stampa a schermo il messaggio di vittoria se il numero dell'utente è maggiore di quello del computer
    winner.innerHTML = `Congratulazioni, hai vinto!!`;
    winner.classList.add("success");

} else if (computerNumber > userNumber) {

    // Stampa a schermo il messaggio di sconfitta se il numero dell'utente è minore di quello del computer
    winner.innerHTML = `Hai perso, riprova!!`;
    winner.classList.add("defeat");

} else {

    // Stampa a schermo il messaggio di pareggio se il numero dell'utente è uguale a quello del computer
    winner.innerHTML = `Hai pareggiato, riprova!!`;
    winner.classList.add("tie");

}