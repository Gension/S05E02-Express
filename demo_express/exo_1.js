// EXO : Créer un nouveau projet avec express (utiliser le même dossier donc l'install npm etc. est déjà fait)
// 2 routes : / -> Afficher un compteur qui est incrémenté à chaque requete
///           /reset -> Réinitialiser le compteur à 0

const express = require('express');

const app = express();

let counter = 0;

app.get('/', (req, res) => {
   counter++;
   res.send(`Le compteur est à ${counter}`);  
});

app.get('/reset', (req, res) => {
    counter = 0;
    res.send('Le compteur a été réinitialisé');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});