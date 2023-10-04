const express = require('express');     // J'importe express 
const app = express();                  // J'appelle express
const port = 3000;                      // J'indique le port sur lequel je veux lancer mon instance

// app.get('', function);
// HTTP : 
//    - GET : Obtenir des données
//    - POST : Ajouter des données
//    - ...

// Je paramètre mon application express pour que quand une requete web avec la méthode GET sur la resource / entre
// il déclanche un callback qui va répondre à la requete avec le texte Hello World!.
app.get('/', (req, res) => {  
    // req toutes les infos relatives à la requete http qui rentre
    // res toutes les infos relatives à la reponse http qui sort

    // res.send -> Renvoi la réponse
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('A propos');
});


// Si je ne définit pas une route pour /blog sans le paramètre il me retourne un 404
app.get('/blog', (req, res) => {
    res.send(`J'affiche tous les articles de blog`)
})

// Route paramétré avec un paramètre que j'ai nommé id
// Il s'écrit :id
// J'y accède dans mon callback à l'aide de req.params.id
// C'est moi qui choisi le nom
app.get('/blog/:id', (req, res) => {
    console.log(req.params);
    res.send(`J'affiche l'article de blog avec l'id ${req.params.id}`);
});



// // API endpoint qui calcule les X premiers chiffres de la suite de fibonnaci et le retourne en JSON en fonction du param
// app.get('/fibonacci/:n', (req, res) => {
//     const fibonacci = [0, 1];
//     for (let i = 2; i < req.params.n; i++) {
//         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     }
//     res.json(fibonacci);
// });

// // API endpoint qui calcule les 10 premiers chiffres de la suite de fibonnaci et le retourne en JSON
// app.get('/fibonacci', (req, res) => {
//     const fibonacci = [0, 1];
//     for (let i = 2; i < 10; i++) {
//         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     }
//     res.json(fibonacci);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

