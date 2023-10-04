const colors = require('colors');
// importer le module readline pour pouvoir lire dans la console
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let min = 0, max = 100, guess = -1, nbAttempts = 0;

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Choisir un nombre aléatoire entre min et max
}

const getOptiNumber = (min, max) => {
    return Math.floor((min + max) / 2); // taper au milieu
}

max = getRandomNumber(max, max * 2);

console.log(`Bienvenue dans le juste prix inversé, choisis un nombre entre ${min} et ${max} et je le devinerais`);

// incrementAttemps la valeur par défaut (si rien n'est précisé est vrai)
const guessNumber = (incrementAttemps = true) => {

    // Si on veut qu'au premier tour il soit pas opti
    // if(min === 0 & max === 100){
    //     guess = getRandomNumber(min, max);
    // } else {
    //     guess = getOptiNumber(min, max);
    // }
    
    // Si on veut le faire jouer opti dès le départ
    guess = getOptiNumber(min, max);
    if(incrementAttemps) {
        nbAttempts++;
    }

    rl.question(`Est-ce que ton chiffre est ${guess} ? [DEBUG] min: ${min} max: ${max} \n> `.yellow, (response) => {
        // Si l'utilisateur a donné la bonne réponse
        if(response === 'gagné') {
            if( nbAttempts < 5) {
                console.log(`Je suis trop fort ! J'ai trouvé la bonne réponse en ${nbAttempts} coups!`.rainbow);
            } else if(nbAttempts < 10) {
                console.log(`J'ai trouvé la bonne réponse en ${nbAttempts} coups! J'aurais pu faire mieux`.green);
            } else if(nbAttempts < 15) {
                console.log(`J'ai trouvé la bonne réponse en ${nbAttempts} coups! Je pense qu'il va falloir que je m'entraine un peu plus`.green);
            } else {
                console.log(`J'ai trouvé la bonne réponse en ${nbAttempts} coups! C'est vraiment pas terrible`.yellow);
            }

            rl.close();
        } else {
            // Si l'utilisateur me dis que c'est moins, je change la limite max utilisé pour générer un nombre aléatoire
            if(response === `c'est moins`) {
                max = guess - 1;
                guessNumber();
            } else if(response === `c'est plus`) {
                min = guess + 1;
                guessNumber();
            } else if(response === `stop` || response === `quit`) {
                console.log(`Au revoir !`);
                rl.close();
            } else {
                console.log(`Heu... ça veut rien dire ce que tu as dit là... Dis moi : gagné, c'est plus ou c'est moins.`.bgRed.white);
                guessNumber(false);
            }
        }
        
    })
}


guessNumber();

// EXO : 
// - Compter le nombre de tentatives
// - Si le bot l'a trouvé en moins de 5 coups : Il dit qu'il est trop fort
// - Si le bot l'a trouvé en moins de 10 coups : Il dit qu'il aurait pu faire mieux
// - Si le bot l'a trouvé en moins de 15 coups : Il dit qu'il doit s'entrainer un peu plus
// - Si en plus de coups il dit qu'il est vraiment pas terrible.

// si l'utilisateur tape autre chose que c'est plus ou c'est moins le bot le bot le rappel à l'ordre
// (Si il tape stop ou quit il quitte le jeu)
