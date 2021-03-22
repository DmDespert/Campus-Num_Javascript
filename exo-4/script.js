// you can write js here

console.log('exo-4');

/*
Nous allons retravailler le contenu de ce tableau : var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

Vous aurez besoin de la documentation sur les tableaux, notamment pour trouver les bonnes méthodes.

Utiliser une méthode pour enlever le dernier élément du tableau secretMessage.
Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
Utiliser une méthode pour supprimer le premier élément du tableau.
Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
Utiliser une méthode pour remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
Utiliser la méthode .join pour afficher le message secret dans la console.
 */

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop(); // Supprime la dernière entrée du tableau
secretMessage.push('to', 'program'); // Ajoute à la fin du tableau les valeurs 'to' et 'program'
secretMessage[6] = 'right'; // Modifie le 6ème élement du talbeau (en partant de 0)
secretMessage.shift(); // Supprime le premier élement du tableau
secretMessage.unshift('Programming'); // Ajout un élement au début du tableau
secretMessage.splice(5, 5, "know"); // Cette fonction supprime des élements en partant de l'index (5) jusqu'à (5) élements après, puis ajoutes l'élément "know" à la place

const secretMessageIs = secretMessage.join(); // Join sert à joindre le tableau
console.log(secretMessageIs);