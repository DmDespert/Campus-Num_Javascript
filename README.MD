# Activités Javascript

Au cours de cette activité, nous vous guiderons dans la réalisation des modules de 1 à 8 du [cours "Introduction to JavaScript" du site Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

Une fois le ou les modules Codecademy réalisés, chaque exercice vous permettra de valider les acquis.

## Modalités de rendu

Tout votre travail doit être fait en utilisant **Git**. Votre avancement devra être présenté dans des commits, sous la forme suivante :

- Un commit minimum par exercice, avec un message reprenant l'intitulé de l'exercice
- Chaque commit contient les modifications de code dans un répertoire d'exercice

Exemple pour le premier exercice :

<img width="956" alt="git-commit-list" src="https://user-images.githubusercontent.com/632197/78457023-9fc00900-76a7-11ea-800f-16e3782dae48.png">

*Les fichiers readme sont [au format Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Pour chaque exercice que vous compléterez, vous pouvez répondre aux questions et ajouter vos commentaires directement sur ce fichier.* 

➡️ **Setup Git**
- Forker ce repo
- Cloner votre fork

Vous aurez ainsi un projet dont vous serez propriétaire, qui contiendra ce readme à compléter et tout votre code.

**Cette étape est essentielle, assurez vous bien de travailler sur votre fork.**

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

👉 Suivez le module suivant sur **Codecademy** :

[Introduction to JavaScript — 1 | Introduction](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction)

---

La température aujourd'hui est de 294 Kelvins.

1. Pour commencer, créer une variable `kelvins` qui prend pour valeur 294;

Nous pouvons aussi exprimer une température en Celsius. La température en Celsius est de 273 degrés inférieure à celle en Kelvins.

2. Convertir la température en Kelvins en stockant le résultat dans une variable nommée `celsius`.
Ecrire un commentaire pour expliquer cette ligne de code.

Nous pouvons aussi exprimer une température en Fahrenheit avec la formule :
`Fahrenheits = Celsius * (9/5) + 32`

3. En utilisant cette équation, calculer la température en Fahrenheit et stocker le résultat dans une variable nommée `fahrenheits`. Ecrire un commentaire pour expliquer cette ligne de code.

Lorsque nous faisons cette conversion, il est très probable d'avoir un nombre avec des décimales, nous allons donc arrondir ce nombre.

4. En utilisant la méthode [`.floor()`](https://www.w3schools.com/jsref/jsref_floor.asp) de la bibliothèque standard, modifier le résultat de la variable `fahrenheits` pour obtenir un entier. Ecrire un commentaire pour expliquer cette ligne de code.

5. Nous voulons modifier le programme afin de demander la température en Kelvins à l'utilisateur et lui afficher ensuite les conversions dans la console du navigateur.
Remplacer la première ligne de code par :

`var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");`

et relancer le programme.

## Ex 2 - Les conditions

👉 Suivez le module suivant sur **Codecademy** :

[Introduction to JavaScript — 2 | Conditionals](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow)

---

Le site [https://estcequecestbientotleweekend.fr/](https://estcequecestbientotleweekend.fr/) affiche un message selon le jour et l'heure dans la semaine : pas du tout, pas encore, bientôt, presque, c'est le weekend, etc... ). 
Vous allez ici **récréer cette logique dans la console du navigateur**.

1. Mise en place

Commencer par créer une variable assignée à un objet Date :

`var myDate = new Date();`

Vous pouvez désormais appeler des *méthodes* sur cette variable *myDate*. Retrouvez la liste des méthodes disponibles sur le site [https://www.w3schools.com/jsref/jsref_obj_date.asp](https://www.w3schools.com/jsref/jsref_obj_date.asp)

Créer une variable de type *String* contenant le message à afficher dans le cas où nous sommes un jour de semaine.

Créer une autre variable de type String contenant le message à afficher dans le cas où nous sommes un jour de weekend.

2. Créer une nouvelle variable correspondant au jour actuel de la semaine, en appelant une méthode sur la variable `myDate`. Tester cette variable pour savoir si le jour actuel est un jour de semaine ou du weekend. En fonction de la réponse, afficher dans la console le message correspondant.

3. En conservant ce premier test, ajouter la nouvelle condition suivante : en semaine et après vendredi 17h, afficher le message du weekend. Pour cela, créer une nouvelle variable correspondant à l'heure actuelle, toujours à partir de notre variable initiale *myDate*, puis tester cette variable.

4. De la même manière que pour le **3.**, créer une nouvelle condition si nous sommes un lundi avant 9h, afficher le message du weekend.

Votre programme est réalisé, mais il difficile de le tester pour savoir si toutes les conditions sont valides. Pour cela, créer en début de programme une variable *isTesting* de type *booléen* :
- Test activé : lancer notre programme en rentrant manuellement le jour et l'heure pour le tester.
- Test désactivé : faire tourner le programme avec le jour et l'heure du moment.

1. Si **isTesting** est `true`, alors la variable correspondant au jour de la semaine n'est plus reliée au jour actuel, mais à un jour fictif demandé à l'utilisateur via la commande `prompt()`. Il en va de même pour la variable contenant l'heure.

2. Si **isTesting** est `false`, le programme se lance avec le jour et l'heure du moment.

## Ex 3 - Les fonctions

👉 Suivez les modules suivant sur **Codecademy** :

[Introduction to JavaScript — 3 | Functions](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions)

[Introduction to JavaScript — 4 | Scope](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-scope)

---

Vous allez programmer la logique du jeu Pierre, Feuille, Ciseau. Vous jouerez contre l'ordinateur. Pour se souvenir des [règles, cliquer ici](https://www.pierrefeuilleciseaux.fr/pierre-feuille-ciseaux-les-regles-classiques/).

Notre code va se décomposer en 4 parties :

* Récupérer le choix de l'utilisateur

* Récupérer le choix du programme

* Comparer les choix

* Annoncer le gagnant


1. Créer un variable `var playerInput = prompt("Your choice ( rock, paper, scissors) ?")`correspondant au choix de l'utilisateur.

2. Créer une fonction `getPlayerChoice()` qui prend en paramètre un seul argument `playerInput`

3. Puisque nous ne pouvons pas être certains que l'utilisateur va taper 'Rock' ou 'rock', nous devons être insensible à la casse : nous allons dans un premier temps utiliser la fonction [`toLowerCase()`](https://www.w3schools.com/jsref/jsref_tolowercase.asp) pour transformer en minuscules la chaine de caractères `playerInput`.

4. Nous devons aussi nous assurer que l'utilisateur rentre bien un des trois choix : 'rock', 'paper', ou 'scissors'.
   A l'intérieur de la fonction `getPlayerChoice()`, écrire une condition qui vérifie que la valeur entrée par l'utilisateur est bien l'une de ces trois valeurs attendues. Si c'est le cas, la fonction retourne la chaine de caractères `playerInput`, sinon afficher un message d'erreur dans la console.

5. C'est maintenant à l'ordinateur de faire un choix.
   Créer une nouvelle fonction `getComputerChoice()` qui ne prend pas de paramètre.
   A l'intérieur, en utilisant la fonction [`Math.random()`](https://www.w3schools.com/jsref/jsref_random.asp), tirer un nombre aléatoire entre 0 et 2 inclus : [0;2]. Suivant le résultat, la fonction doit retourner une valeur parmi {'rock', 'paper', 'scissors'}.

Maintenant, nous devons déterminer le gagnant.

6. Créer une fonction `findWinner()` qui prend deux paramètres, `playerChoice` et `computerChoice`.

Cette fonction va comparer les choix et va retourner un de ces 3 résultats :

* Tied : égalité

* Won : l'utilisateur a gagné

* Lost : l'utilisateur a perdu


7. Cas d'égalité.
   A l'intérieur de la fonction `findWinner()`, écrire une condition qui vérifie si le choix de l'utilisateur est égal à celui de l'ordinateur. Si c'est le cas, retourner la chaîne de caractères 'Tied'.

8. Si ce n'est pas une égalité alors quelqu'un a gagné. Commencer par vérifier si `playerChoice` est `rock`. A l'intérieur de cette condition, vérifier si le choix de l'ordinateur est 'scissors'. Si oui, alors retourner 'Won'; sinon retourner 'Lost'.

9. Ensuite, écrire une nouvelle condition pour déterminer si le choix de l'utilisateur est 'paper'. A l'intérieur de cette condition, en fonction du choix de l'ordinateur, retourner une valeur parmi {'Lost', 'Won'}.

10. Traiter maintenant le cas où l'utilisateur a choisi 'scissors'.

11.  Nos fonctions sont prêtes, nous pouvons maintenant commencer le jeu.
    Créer une fonction `playGame()` à l'intérieur de laquelle créer une variable `uChoice` qui prend pour valeur le résultat de la fonction `getPlayerChoice()` ; ajouter l'argument de votre choix : 'rock', 'paper', ou 'scissors'.
    Récupérer le résultat de l'appel de fonction `getComputerChoice()` dans une autre variable : `computerChoice`.
    Afficher chacune de ces variables dans la console.

12.  Affichons maintenant le vainqueur.
    A l'intérieur de la fonction `playGame()`, appeller la fonction `findWinner()` avec en paramètre les variables `uChoice` et `computerChoice`. Pour connaitre le vainqueur vous devez mettre l'appel de la fonction à l'intérieur d'un `console.log()`.
    Maintenant appeler la fonction `playGame()`

13.  On va ajouter un petit code secret (cheat code) afin d'être certain de gagner dans tous les cas : si l'utilisateur entre 'bomb' alors il a gagné. Modifier votre code en fonction.

## Ex 4 - Les tableaux

👉 Suivez le module suivant sur **Codecademy** :

[Introduction to JavaScript — 5 | Arrays](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays)

---

Nous allons retravailler le contenu de ce tableau : 
`var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];`

Vous aurez besoin de la [documentation sur les tableaux](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), notamment pour trouver les bonnes méthodes.

1. Utiliser une méthode pour enlever le dernier élément du tableau `secretMessage`.
2. Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
3. Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
4. Utiliser une méthode pour supprimer le premier élément du tableau.
5. Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
6. Utiliser une méthode pour remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
7. Utiliser la méthode `.join` pour afficher le message secret dans la console.

## Ex 5 - Les boucles

👉 Suivez les modules suivant sur **Codecademy** :

[Introduction to JavaScript — 6 | Loops](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops)

[Introduction to JavaScript — 7 | Iterators](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators)

---

Les baleines traduisent les phrases comme : 'Turpentine and turtles' par: 'UEIEAUE'.

Comment ? Il y a trois règles simples : 
- pas de consonnes, que des voyelles
- pas d'espace
- toutes les lettres en majuscules (uppercase).

- pas de consonnes, que des voyelles
- pas d'espace
- toutes les lettres en majuscules (uppercase).

Pour faire cette traduction, nous allons utiliser des boucles.

1. Créer une variable `input` qui prend pour valeur n'importe quelle phrase ou mot à traduire.

2. Créer maintenant un tableau de lettres. Puisque la langue des baleines ne contient que des voyelles, créer une variable `vowels` de type tableau, contenant toutes les voyelles de l'alphabet.

3. On aura besoin de stocker la chaine traduite dans un tableau. Pour cela, créer une variable `resultArray` dont la valeur est un tableau vide, pour le moment.

4. Essayons maintenant de trouver toutes les voyelles dans notre chaine initiale : on peut le faire en vérifiant si chaque lettre de notre texte est une voyelle. Pour cela, on peut regarder si la première lettre est une voyelle, puis la deuxième, etc.
   Créer donc une boucle qui parcourt toutes les lettres de notre chaine de caractères. A l'intérieur de cette boucle, afficher la lettre courante dans la console.

5. Maintenant nous devons vérifier si la lettre courante est une voyelle ; autrement dit, si la lettre courante est une lettre du tableau `vowels`. Utiliser la méthode `indexOf` des tableaux pour le faire.

6. Bonus : à la place de `indexOf`, écrire une seconde boucle pour trouver l'index de la voyelle recherchée.

7. Si la lettre est une voyelle, utiliser la méthode `.push()` sur le tableau `resultArray` afin d'y ajouter la lettre courante input[i]. Vérifier que le tableau `resultArray` ne contient que des voyelles.

8. En affichant la valeur de `resultArray`, on observe qu'il y a des virgules entre chaque élément. Utiliser les méthodes `join()` et `toUpperCase()` pour un bon formatage.

9. Lancer votre programme, chanter la traduction et être heureux de tout ce que vous êtes parvenu à faire jusqu'alors !

## Ex 6 - Les objets

👉 Suivez le module suivant sur **Codecademy** :

[Introduction to JavaScript — 8 | Objects](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects)

---

1. Compléter le petit exercice qui se trouve en commentaire dans le fichier javascript de l'exercice.

2. Nous allons maintenant créer et extraire des informations à propos de votre équipe de sports préférée. _Choississez votre sport : Basketball, soccer, tennis, water polo..._ Posez vous la question des différentes données à afficher à propos de cette équipe, et comment cette donnée peut être structurée.

Nous avons besoin dans un premier temps d'une structure de données permettant de stocker des informations multiples sur notre équipe : créer une variable 'team' dont la valeur est un objet vide.

3. Notre équipe possède d'une part un ensemble de joueurs et d'autre part un ensemble de match joués. Nous voulons représenter les deux. Ajouter deux propriétés à votre objet : `players` et  `games` toutes les deux étant des tableaux vides.

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

5. Créer un champ texte et un bouton. Au clic sur le bouton, afficher les articles du type entré dans le champ texte.

6. Ajouter une checkbox pour afficher ou non les articles en rupture de stock.

7. Créer la fonctionnalité de tri des articles par nom ou par prix, et donner le choix de trier par ordre ASC (ascendant) ou DESC (descendant).

8. Ajouter un formulaire simple permettant d'ajouter un article à la liste.

9. Retravailler la structure de données dans `data.js` afin d'avoir une structure comme décrite dans le fichier `datas2.js`. Pour cela, remonter le type d'un niveau et ajouter un contact à l'objet.

Ceci permettra d'avoir une structure qui liste les catégories composées d'une clé `type` et une clé `items` qui contient tous les objets de la catégorie `type`.

10. Afficher tous les contacts.

11. Faites fonctionner votre page avec cette nouvelle structure.

### Mise en forme

Pour rendre l'utilisation de votre application plus facile, nous allons maintenant travailler son ergonomie.

1. Charger [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/) dans le projet.

2. Afficher les articles et leurs contacts dans un tableau, en utilisant un tableau depuis la documentation de Bootstrap.

3. Faire en sorte qu'en ajoutant un nouvel objet, il s'ajoute aussi dans le tableau.

4. Adapter le filtre et le tri au tableau.

5. Transformer le filtre d'un champ texte en liste déroulante basée sur votre data. Si un traduction est disponible, l'afficher à la place du nom du type.

### Fonctionnalités bonus

1. Ajouter une checkbox au début de chaque ligne pour pouvoir sélectionner un ou plusieurs articles.

2. Quand des articles sont sélectionnés, afficher un bouton "Ajouter au panier".

_Vous pouvez ici changer la structure de données pour vous aider._

3. Afficher le nombre d'articles et le prix total dans un panier d'achats. À la validation du panier, déduire les quantités disponibles des articles sélectionnés.
