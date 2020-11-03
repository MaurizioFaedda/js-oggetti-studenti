
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function() {
    // Creare un oggetto che descriva uno studente con le seguenti proprietà:
    // nome, cognome e età.

    // oggetto studente
    var studente = {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': 20
    };

    // Stampare con il for in le proprietà.
    for (var key in studente) {
        console.log(key + ': ' + studente[key]);
    }

    // array di oggetti studenti
    var studenti = [
        {
            'nome': 'Mario',
            'cognome': 'Rossi',
            'eta': 20
        },
        {
            'nome': 'Luca',
            'cognome': 'Verdi',
            'eta': 30
        },
        {
            'nome': 'Maria',
            'cognome': 'Bianchi',
            'eta': 40
        }
    ];

    console.log(studenti);


    // Creare un array di oggetti di studenti.
    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
    // ciclo tutti gli studenti
    for (var i = 0; i < studenti.length; i++) {
        var studente_corrente = studenti[i];
        console.log(studente_corrente.nome + ' ' + studente_corrente.cognome);
    }

    // dati utente
    var nome_inserito = prompt("Inserisci il nome");
    var cognome_inserito = prompt("Inserisci il cognome");
    var eta_inserita = parseInt(prompt("Inserisci l'età dello studente"));

    // creo un nuovo oggetto con i dati inseriti dall'utente
    var nuovo_studente = {
        'nome': nome_inserito,
        'cognome': cognome_inserito,
        'eta': eta_inserita
    };


    console.log(nuovo_studente);

    // aggiungo il nuovo studente all'array degli studenti
    studenti.push(nuovo_studente);

    console.log(studenti);

    // ciclo tutti gli studenti
    for (var i = 0; i < studenti.length; i++) {
        // lo studente corrente è un oggetto
        var studente_corrente = studenti[i];
        // per ogni studente, stampo il nome e il cognome in un list item
        console.log(studente_corrente.nome + ' ' + studente_corrente.cognome);
    }

});
