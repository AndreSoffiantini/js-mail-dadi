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

    /* La variabile di controllo assume valore true se la userMail è uguale ad almeno una validMail,
    altrimenti rimane false */
    if (userMail === validMail) {

        validUser = true;

    }

}

console.log(validUser);

// Stampare messaggio di esito del controllo

// Generare un numero random tra 1 e 6 per il giocatore

// Generare un numero random tra 1 e 6 per il computer

// Stabilire il punteggio più alto, che sarà il vincitore