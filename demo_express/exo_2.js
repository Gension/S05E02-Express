// EXO 2 : Faire un autre projet avec deux tableau des langues différentes avec bonjour dans differentes langues.
// 2 routes : / -> Afficher une langue du premier tableau au hasard
//            /alt -> Afficher une langue du second tableau au hasard

const express = require('express');
const app = express();

const hello1 = [
    { key: 'fr', value: 'Bonjour' },
    { key: 'en', value: 'Hello' },
    { key: 'es', value: 'Hola' },
    { key: 'de', value: 'Guten Tag' },
    { key: 'it', value: 'Ciao' },
    { key: 'nl', value: 'Hallo' },
];

const hello2 = [
    { key: 'ko', value: '안녕하세요' },
    { key: 'ja', value: 'こんにちは' },
    { key: 'pl', value: 'Cześć' },
    { key: 'ro', value: 'Buna ziua' }
];


const getRandomLanguage = (helloArray) => {
    // Je retourne un élément aléatoire du tableau
    let randomLanguage =  helloArray[Math.floor(Math.random() * helloArray.length)];
    return randomLanguage.value;
}

app.get('/', (req, res) => {
    res.send(getRandomLanguage(hello1));
});

app.get('/alt', (req, res) => {
    res.send(getRandomLanguage(hello2));
});


// req.params : les paramètres passés dans l'URL | On peut faire du routage de ssus
// req.query : les paramètres passés dans l'URL après le ? | On ne peut pas faire du routage dessus

app.get('/lang/:lang', (req, res) => {
// app.get('/lang/:liste/:lang', (req, res) => {
    let { lang } = req.params; // let lang = req.params.lang;
    // let { liste } = req.params; // let liste = req.params.liste;

    console.log('req.query', req.query);
    let { liste } = req.query;

    console.log('liste', liste);

    let array = hello1;
    // si liste existe et liste est égal à un
    if(liste && liste === '1') {
        array = hello2;
    }
    // Chercher dans un tableau le premier élément ou arrayElm.key === lang c'est vrai
    // Autrement dit ou la clef est égale à lang
    let foundLang = array.find((arrayElm) => { return arrayElm.key === lang; });

    console.log(foundLang);

    if(foundLang) {
        res.send(foundLang.value);
    } else {
        res.status(404).send('Language not found');
    }

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


//Adapter cet exo pour pour faire une route avec /lang/:lang pour choisir la langue.
// Il faut modifier le tableau (je vous conseil un tableau d'objets)

// Pour ceux qui n'avait pas preshot le première exo :)
// BONUS : sur la première route, utiliser un query string pour choisir lequel des deux tableaux il faut utiliser ?tab=0 ou ? tab=1

