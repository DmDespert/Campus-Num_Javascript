# Activités JavaScript

Afin de faire ces exercices, il est préférable d'avoir réalisé les tutoriels de 1 à 6 du [cours "Introduction to JavaScript" du site Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).
Une fois réalisés, ces exercices vous permettront de valider les acquis.

## Ex 0 - Lecture de code JavaScript.

Avant d'écrire du code JavaScript, il est important de savoir le lire, c'est le but de cette partie.

Rendez vous dans le répertoire `/exo-0`

### Section 1 : Commentaires

L'objectif est de commenter **chaque ligne de code** du fichier `index.html` avec une phrase en français qui explique ce qu'elle fait.

Par exemple :

```js
var a = 38; // je déclare une variable nommée a qui prend pour valeur l'entier 38.
```

Faire ou compléter une fiche mémo qui reprend les différentes expressions.

### Section 2 : Utilisation de la console

En utilisant les variables déclarées plus haut, afficher dans la console les différentes consignes.

### Section 3 : Undefined

Décommenter la ligne puis recharger la page.

```js
// console.log(myVariable);
```

Que se passe-t-il et pourquoi ?

## Ex 1 - Les variables

La température aujourd'hui est de 294 Kelvin.

1. Pour commencer, créer une variable `kelvin` qui prend pour valeur 294;

Nous pouvons aussi exprimer une température en Celsius. La température en Celsius est de 273 degrés inférieure à celle en Kelvin.

2. Convertir la température en Kelvin en stockant le résultat dans une variable nommée `celsius`.
Ecrire un commentaire pour expliquer cette ligne de code.

Nous pouvons aussi exprimer une température en Fahrenheit avec la formule :
`Fahrenheit = Celsius * (9/5) + 32`

3. En utilisant cette équation, calculer la température en Fahrenheit et stocker le résultat dans une variable nommée `fahrenheit`. Ecrire un commentaire pour expliquer cette ligne de code.

Lorsque nous faisons cette conversion, il est très probable d'avoir un nombre avec des décimales, nous allons donc arrondir ce nombre.

4. En utilisant la méthode `.floor()` de la bibliothèque standard, modifier le résultat de la variable `fahrenheit` pour obtenir un entier. Ecrire un commentaire pour expliquer cette ligne de code.

5. Nous voulons modifier le programme afin de demander la température en Kelvin à l'utilisateur et lui afficher ensuite les conversions dans la console du navigateur.
Remplacer la première ligne de code par :

`var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");`

et relancer le programme.


## Ex 2 - Les conditions

Vous avez été recruté pour écrire un programme pour gérer les inscriptions d'une course à pied. Tous les adultes courront le matin et tous les personnes qui ont moins de 18 ans l'après midi. Suivez les instructions afin de développer la logique du programme.

1. Créer une variable pour stocker si un coureur est déjà inscrit ou pas. Quel est le type de cette variable ?

2. Créer une variable pour stocker l'âge du coureur.

3. Chaque personne qui s'inscrit a un numéro de coureur supérieur à celui inscrit auparavant. Ecrire une condition qui vérifie si la personne n'est pas déjà inscrite, et ajouter 1000 à son numéro si ce n'est pas le cas.
Vous pouvez utiliser cette expression pour avoir un numéro de coureur aléatoire.
`var raceNumber = Math.floor(Math.random()*1000);`

4. Ecrire une nouvelle condition en dessous de la première permettant d'afficher pour :
    1. Les personnes qui ont plus de 18 ans et déjà inscrites : 'You will race at 9:30 am'
    2. Les personnes déjà inscrites ou qui ont plus de 18 ans ( mais pas les deux ) 'You will race at 11:00 am ' plus leur numéro de dossard.
    3. Les personnes de moins de 18 ans ou qui ne sont pas encore inscrites. 'You will race at 12:30 pm ' plus leur numéro de dossard.

5. Entrer différentes combinaisons de valeurs pour les deux variables et vérifier le bon fonctionnement de votre programme.

6. Ajouter un block `else` dans votre code disant simplement : 'Go see the registration desk' pour les personnes ne rentrant pas dans les cas précédents.


## Ex 3 - Les fonctions

Vous allez programmer la logique du jeu Pierre, Feuille, Ciseau. Vous jouerez contre l'ordinateur. Pour se souvenir des [règles, cliquer ici](https://www.pierrefeuilleciseaux.fr/pierre-feuille-ciseaux-les-regles-classiques/).

Notre code va se décomposer en 4 parties :
* Récupérer le choix de l'utilisateur
* Récupérer le choix du programme
* Comparer les choix
* Annoncer le gagnant

1. Créer une fonction `getUserChoice()` qui prend en paramètre un seul argument `userInput`

2. Puisque nous ne pouvons pas être certains que l'utilisateur va taper  'Rock' ou 'rock', nous allons dans un premier temps utiliser la fonction `toLowerCase()` pour transformer en minuscule la chaine de caractère `userInput`.

3. Nous devons aussi nous assurer que l'utilisateur rentre bien un des trois choix : 'rock', 'paper', ou 'scissors'.
A l'intérieur de la fonction `getUserChoice()`, écrire une condition qui vérifie que la valeur rentrée par l'utilisateur est bien l'une des trois valeurs attendues i.e. 'rock', 'paper', ou 'scissors'. Si c'est le cas, la fonction retourne la chaine de caractères `userInput`, sinon afficher un message d'erreur dans la console.

4. Maintenant c'est à l'ordinateur de faire un choix.
Créer une nouvelle fonction `getComputerChoice()` qui ne prend pas de paramètre.
A l'intérieur, en utilisant la fonction `Math.random()`, tirer un nombre aléatoire entre 0 et 2. Ensuite, étant donné le résultat, la fonction doit retourner 'rock', 'paper', ou 'scissors'.

Maintenant, nous devons déterminer le gagnant.

5. Créer une fonction `determineWinner()` qui prend deux paramètres `userChoice` et `computerChoice`

Cette fonction va comparer les choix et va retourner un de ces 3 résultats :
* Tied : égalité
* Won : l'utilisateur a gagné
* Lost : l'utilisateur a perdu

6. Commencons par le cas d'égalité, à l'intérieur de la fonction `determineWinner()`, écrire une condition qui vérifie si le choix de l'utilisateur est égal à celui de l'ordinateur. Si c'est le cas, retourner la chaîne de caractères 'Tied'.

7. Si ce n'est pas une égalité alors quelqu'un a gagné. Commencer par vérifier si `userChoice` est `rock`. A l'intérieur de cette condition, vérifier si le choix de l'ordinateur est 'scissors'. Si oui, alors retourner 'Won'; si non retourner 'Lost'.

8. Ensuite, écrir une nouvelle condition pour déterminer si le choix de l'utilisateur est 'paper'. A l'intérieur de cette condition, en fonction du choix de l'ordinateur, retourner 'Lost' ou 'Won'

9. Traiter maintenant le cas où l'utilisateur a choisi 'scissors'.

10. Nos fonctions sont prêtes, nous pouvons maintenant commencer le jeu.
Créer une fonction `playGame()`, à l'intérieur de celle ci, créer une variable `uChoice` qui prend pour valeur le résultat de la fonction `getUserChoice()` en ajoutant l'argument de votre choix : 'rock', 'paper', or 'scissors'.
Ensuite créer une autre variable `computerChoice` qui prend pour valeur le résultat de l'appel à la fonction `getComputerChoice()`.
Afficher chacune de ces variables dans la console.

11. Affichons maintenant le vainqueur.
A l'intérieur de la fonction `playGame()`, appeller la fonction `determineWinner()` avec en paramètre les valeurs des variables `uChoice` et `computerChoice`. Pour connaitre le vainqueur vous devez mettre l'appel de la fonction à l'intérieur d'un `console.log()`.
Maintenant appeler la fonction `playGame()`

11. On va ajouter un petit code secret afin d'être certain de gagner dans tous les cas : si l'utilisateur rentre 'bomb' alors il a gagné. Modifier votre code en fonction.

## Ex 4 - Les tableaux

`var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];`

Vous aurez besoin de la [documentation sur les tableaux](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), notamment pour trouver les bonnes méthodes.

1. Utiliser une méthode pour enlever le dernier éléments du tableau `secretMessage`.
2. Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
3. Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
4. Utiliser une méthode pour supprimer le premier élément du tableau.
5. Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
6. Utiliser une méthode pour remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
7. Utiliser la méthode `.join` pour afficher le message secret à la console.

## Ex 5 - Les boucles

Les baleines traduisent les phrases comme : 'Turpentine and turtles' par: 'UEIEAUE'.

Comment ? Il y a une règle simple : pas de consonnes, uniquement les voyelles, pas d'espace et toutes les lettres en majuscules.

Pour faire cette traduction, nous allons utiliser des boucles.

1. Créer une variable nommée `input` qui prend pour valeur n'importe quelle phrase ou mot à traduire.

2. Créer maintenant un tableau de lettres. Puisque la langue des baleines ne contient que des voyelles, créer une variable `vowels` de type tableau, contenant toutes les voyelles de l'alphabet.

3. On aura besoin de stocker la chaine traduite dans un tableau. Pour cela, créer une variable `resultArray` dont la valeur est un tableau vide, pour le moment.

4. Essayons maintenant de trouver toutes les voyelles dans notre chaine initiale : on peut le faire en vérifiant si chaque lettre de notre texte est une voyelle. Pour cela, on peut regarder si la première lettre est une voyelle, puis la deuxième, etc.
Créer donc une boucle qui parcourt toutes les lettres de notre chaine de caractères. A l'intérieur de cette boucle, afficher la lettre courante dans la console.

5. Maintenant nous devons vérifier si la lettre courante est une voyelle, autrement dit, si la lettre courante est une lettre du tableau `voyels`. Utiliser la méthode `indexOf` des tableaux pour le faire.

6. Bonus : à la place de `indexOf`, écrire une seconde boucle.

7. Si la lettre est une voyelle, utiliser la méthode `.push()` sur le tableau `resultArray` afin d'y ajouter la lettre courante input[i]. Vérifier que le tableau `resultArray` ne contient que des voyelles.

8. En affichant la valeur de `resultArray`, on observe qu'il y a des virgules entre chaque élément. Utiliser les méthodes `join()` et `toUpperCase()` pour un bon formatage.

9. Lancer votre programme et chanter la traduction !

## Ex 6 - Les objets

Vous devez avoir terminé le cours 8 de Codecademy ( exercices 1 à 7 ) sur les Objets pour faire cet exercice.

1. Compléter le petit exercice qui se trouve en commentaire dans le fichier javascript de l'exercice.

2. Nous allons maintenant créer et extraire des informations à propos de votre équipe de sports préférée. _Choississez votre sport : Basketball, soccer, tennis, water polo..._ Posez vous la question des différentes données à afficher à propos de cette équipe, et comment cette donnée peut être structurée.

Nous avons besoin dans un premier temps d'une structure de données permettant de stocker des informations multiples sur notre équipe : créer une variable 'team' dont la valeur est un objet vide.

3. Notre équipe a des joueurs qui jouent des matchs. Nous voulons représenter les deux. Ajouter deux propriétés à votre objet : `players` et  `games` toutes les deux étant des tableaux vides.

4. Remplir le tableau `players` avec des données sous ce format :

```js
{
    firstName: “Pablo”,
    lastName:”Sanchez”,
    age: 11
}
```

5. Remplir le tableau `games` avec des données sous ce format :

```js
{
    opponent: "Broncos",
    teamPoints: 42,
    opponentPoints: 27
}
```

6. Nous allons maintenant ajouter un nouveau joueur à l'équipe. Créer une méthode `addPlayer` qui prend trois arguments : `firstName`, `lastName`, et `age` et qui ajoute un joueur au tableau `players`.

7. Appeler cette méthode et vérifier son bon fonctionnement.

8. Faire la même chose pour les matchs, stockés dans le tableau `games`

9. Appeler vos fonctions plusieurs fois pour avoir un objet avec suffisamment de données.

10. Calculer la somme des points de votre équipe sur tous les matchs joués.

11. Calculer la moyenne des points de l'équipe adverse sur tous les matchs.

12. Ecrire une fonction qui permet de trouver le joueur le plus âgé.

13. Bonus: Trier les joueurs par ordre alphabétique.


## Ex 7 - Listing d'articles sur un site marchand

Nous allons essayer de nous rapprocher d'un site marchand.
Nous vous fournissons un jeu de données qui reprend des articles que l'on peut retrouver sur un site de commerce en ligne type Le bon coin.

Dans cet exercice, vous allez lier la partie HTML et Javascript afin de mettre en pratique ce que vous avez appris dans un contexte un peu plus concret.

Ces manipulations seront à faire avec du pur JavaScript, cela vous permettra de mieux comprendre la partie jQuery qui suivra.

Voici quelques pages de docs pouvant vous servir.

https://www.w3schools.com/js/js_htmldom.asp

https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents

https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-manipulation.php

https://dom-tutorials.appspot.com/static/index.html

### Administrer un catalogue d'articles depuis une page web 

1. Parcourir les articles fournis pour les afficher un à un dans la console

2. Créer un objet qui servira à traduire les types. Cet objet aura pour structure `{type : "type traduit"}`. Par exemple `{videoGame:"Jeux Vidéos"}`.

3. Ajouter une nouvelle clé aux objets existants pour stocker le type traduit, sans modifier le fichier data.js. Répéter l'étape 1 pour vérifier le type traduit.

4. Créer une page HTML et lister les articles depuis la donnée.

5. Créer une champ texte et un bouton. Au clic sur le bouton, afficher les articles du type entré dans le champ texte.

6. Ajouter une checkbox pour afficher ou non les articles en rupture de stock.

7. Créer la fonctionnalité de tri des articles par nom ou par prix, et donner le choix de trier par ordre ASC ou DESC.

8. Ajouter un formulaire simple permettant d'ajouter un article à la liste.

9. Retravailler la structure de données dans `data.js` afin d'avoir une structure de données comme décrite dans le fichier `datas2.js`. Pour cela, remonter le type d'un niveau et ajouter un contact à l'objet.

Ceci permettra d'avoir une structure qui liste les catégories composées d'une clé `type` et une clé `items` qui contient tous les objets de la catégorie `type`.

10. Afficher tous les contacts.

11. Faites fonctionner votre page avec cette nouvelle structure.

### Mise en forme

Pour rendre l'utilisation de votre application plus facile, nous allons maintenant travailler son ergonomie.

1. Charger [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/) dans le projet.

1. Afficher les articles et leurs contacts dans un tableau, en utilisant un tableau depuis la documentation de Bootstrap.

2. Faire en sorte qu'en ajoutant un nouvel objet, il s'ajoute aussi dans le tableau.

3. Adapter le filtre et le tri au tableau.

4. Transformer le filtre d'un champ texte en liste déroulante basée sur votre data. Si un traduction est disponible, l'afficher à la place du nom du type.

### Fonctionnalités bonus
1. Ajouter une checkbox au début de chaque ligne pour pouvoir sélectionner un ou plusieurs articles.

2. Quand des articles sont sélectionnés, afficher un bouton "Ajouter au panier".

_Vous pouvez ici changer la structure de données pour vous aider._

3. Afficher le nombre d'articles et le prix total dans un panier d'achats. À la validation du panier, déduire les quantités disponibles des articles sélectionnées.
