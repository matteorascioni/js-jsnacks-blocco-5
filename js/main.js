// Jquery starter
$(document).ready(function() {
    /**
     * JSNACK 1 
        Creare un array di oggetti
        Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
        Stampare a schermo la bici con peso minore con handlebars.
     * 
     */

    // var bicilette = [
    //     {
    //         nome: 'Bianca',
    //         peso: 8,
    //     },
    //     {
    //         nome: 'Rossa',
    //         peso: 9,
    //     },
    //     {
    //         nome: 'Verde',
    //         peso: 15,
    //     },
    // ];

    // // Handlebars
    // var source = $('#bike-template').html();
    // var template = Handlebars.compile(source);

    // // LOOP BICI PIÚ LEGGERA
    // var biciclettaLight = bicilette[0];

    // for (var i = 1; i < bicilette.length; i++) {
    //     if (bicilette[i].peso < biciclettaLight.peso) {
    //         biciclettaLight = bicilette[i];
    //     }
    // }

    // // Stampa a schermo i risultati
    // var data = {
    //     nome: biciclettaLight.nome,
    //     peso: biciclettaLight.peso,
    // };

    // var html = template(data);
    // $('.container').append(html);

    

    /**
     *  JSNACK 2 
     *  Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
        Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
        Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
    */

    //  REF
    // var myArray = ['Paolo', 'Fabio', 'Lorenzo', 'Matteo', 'Simone', 'Chiara'];
    // var tot = myArray.length - 1;
    // var min = parseInt(prompt('Indice di inizio, tra 0 e ' + tot) );
    // var max = parseInt(prompt('Indice di fine, tra 0 e ' + tot) );

    // var newArray = [];
    // for( var i = 0; i < myArray.length; i++) {
    //     if (min <= i && max >= i) {    
    //         newArray.push(myArray[i]);
    //     }
    // }
    // console.log('Primo array ', myArray);
    // console.log('index ', min, max);
    // console.log('New', newArray);



    /**
     * JSNACK 3
     *  Creiamo un array di oggetti (scelti da voi)
        Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
        Non dobbiamo modificare l'array iniziale.
     */

    var myObjectsArray = [
    {
        name: 'a',
        colore: 'giallo',
        altezza: 180,
    },
    {
        name: 'b',      
        colore:  'blu',
        altezza: 150,
    },
    {
        name: 'c',
        colore:  'rosso',
        altezza: 130,
    },
    {
        name: 'd',
        colore:  'nero',
        altezza: 120,
    },
    {
        name: 'e',
        colore:  'arancione',
        altezza: 100,
    },
    ];

    var newArrayObj = [];
    for ( var i = 0; i < myObjectsArray.length; i++) {
        var copyObj = {
            name: myObjectsArray[i].name,
            colore: myObjectsArray[i].colore,
            altezza: myObjectsArray[i].altezza,
            position: genRandomPosition(),
        };    

        newArrayObj.push(copyObj);
    }

    console.table(myObjectsArray);
    console.table(newArrayObj);

    // GEN RANDOM POSTION 
    function genRandomPosition() {
        var letters = 'abcdefghijklmnopqrstuvwxyz'

        var letter = letters[genRandomNumbers(0, letters.length - 1)];

        return letter; 
    }

    // GEN RANDOM NUMBERS
    function genRandomNumbers(min, max) {
        return Math.floor( Math.random() * (max - min + 1) + min);
    }
})