# Challenge S05E01

## PARTIE 1 - Le jeu de la fourchette, dans l'autre sens

Tu connais le juste prix ? C'est un divertissement fantastique !

Lance son micro 🎤 💥 🤦‍♂️

On va créer un programme pour demander à l'utilisateur de choisir un nombre aléatoire, et cette fois ci c'est l'ordinateur qui doit trouver le chiffre ! 

### Énoncé débrouillard

1. Créer un programme qui pose une question à l'utilisateur
2. Détecter le _petit problème d'affichage_ et le corriger
3. Modifier la question posée pour proposer un premier nombre aléatoire entre 1 et 100 à la place
4. En fonction de la réponse de l'utilisateur, afficher un message détaillant ce que le programme va faire par la suite. Si c'est gagné du premier coup, afficher un message de victoire :tada:
5. Faire ce qu'on dit : proposer un nombre pertinent par rapport à la réponse de l'utilisateur.
6. Trouver le moyen de répéter ce procédé jusqu'à trouver le bon nombre.
7. Trouver la meilleure méthode de calcul des nombres proposés

### Énoncé guidé

<details><summary>À tout moment, n'hésitez à regarder la version guidée du point sur lequel vous bloquez</summary>

1. Commencez par créer un petit programme qui pose une question à l'utilisateur et affiche sa réponse dans la console sous forme d'erreur
2. Tiens, la saisie de l'utilisateur se cale juste après la question (`Quel âge avez-vous?14`), ce n'est pas très joli. Ce n'est pas très important non plus mais cherchez donc un moyen de caler un saut de ligne entre la question et la réponse de l'utilisateur. Je crois qu'on a vu une notion aujourd'hui qui pourrait nous aider :thinking_face:
3. Déclarez 3 variables `minBoundary`, `maxBoundary` et `proposition` (celle-ci sera un nombre aléatoire compris entre les valeurs des 2 premières). Mettez à jour la question posée pour qu'elle propose maintenant le nombre `proposition` à l'utilisateur.  
La première partie du programme est terminée : l'ordinateur propose un nombre compris dans les bornes fixées. Mais comment comprendre la réponse de l'utilisateur ? Étant donné qu'on a affaire à un humain (à priori :smirk:), il va falloir gérer toutes les réponses possibles et imaginables : `C'est plus`, `c'est plus`, `plus`, `supérieur`, `Nope ! C'est plus :-P` et j'en passe :no_good_man: 
4. Décidez d'un format de réponse attendu (par exemple `+`, `-` et `=`), indiquez ces options dans la question (UX :heart:) et en fonction de la réponse de l'utilisateur, affichez un message différent (par exemple `ok, je vais proposer un nombre plus grand`, `bon, un nombre plus petit...` et `YES ! Node ftw`).  
Si le nombre est trouvé, affichez un message de victoire et terminez le programme.
5. Maintenant que vous annoncez que vous allez chercher un nombre plus petit, il est temps de tenir promesse. Mettez à jour `minBoundary` ou `maxBoundary` en fonction de la réponse de l'utilisateur et déterminez un nouveau nombre aléatoire entre ces 2 bornes. Si le nombre n'est pas trouvé du premier coup, proposez donc ce nouveau nombre que vous venez de calculer.  
La majeure partie du programme est terminée : il propose un premier nombre et tient compte de la réponse de l'utilisateur pour proposer un nombre plus pertinent.
6. Problème : `readline` est _asynchrone_, il lance un callback dès que l'utilisateur répond. Dans ces conditions, impossible d'utiliser une boucle. Heureusement, ce n'est pas notre seule arme pour [répéter un code tant qu'une condition n'est pas respectée](https://media.conforama.fr/Medias/600000/40000/3000/200/50/G_643258_A.jpg). [Non ? Vous ne voyez pas ?](https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg)
Si vous avez suivi l'énoncé à la lettre, votre code devrait commencer à se répéter. Et la seule façon de le poursuivre serait de le répéter encore plus : appeler à nouveau `readline.question` dans le callback du précédent `readline.question`, lui-même déjà situé dans le callback du tout premier `readline.question`. Bon. Comment on factorise d'habitude ? Eh bien perpétuons la tradition et écrivons une fonction qui pose une question. Si la réponse n'est pas `=`, rappelez cette fonction depuis l'intérieur de la fonction. Félicitations :tada: Vous avez maintenant un programme infaillible qui finira par trouver votre nombre !
7. Oui mais... avec des propositions aléatoires, ça peut même longtemps... Trouvez un moyen d'exclure un maximum de valeurs à chaque proposition :nerd_face:

</details>

### Bonus

1. Demander les bornes à l'utilisateur
2. Contrôler les saisies utilisateur (les bornes doivent être des entiers, les réponses aux propositions doivent être parmi celles proposées)
3. Si l'utilisateur saisit un maximum inférieur au minimum, recommencer la saisie des 2 nombres (et le gronder, c'est quand même pas compliqué)
4. Si au bout de 3 chances, il continue de saisir max < min, inverser les 2 bornes et lancer le programme comme si de rien n'était :smiling_imp: 

--- 

## PARTIE 2 - Exploration Express

En vous aidant de la documentation d'express (https://expressjs.com/fr/), tentez de reproduire le comportement du http.js