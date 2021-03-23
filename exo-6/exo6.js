// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

console.log(joeInfo.rooms);
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
joeInfo.garage = 1;
console.log(joeInfo.garage);

/*
Calculer la moyenne des points de l'équipe adverse sur tous les matchs.

Bonus: Trier les joueurs par ordre alphabétique.
 */

let team = {
    globalScore : 0,
    olderPlayer : 0,
    seasonMiddle : 0,
    player: [
        {
            firstname: "Pablo",
            lastname: "Sanchez",
            age: 11
        },
        {
            firstname: "Rollo",
            lastName: "Becco",
            age: 15
        },
    ],
    games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: "New York",
            teamPoints: 45,
            opponentPoints: 40
        },
    ],
    addPlayer(firstName, lastName, Age) {
        team.player.push({
            firstname: firstName,
            lastname: lastName,
            age: Age,
        })
    },
    addGames(opponent, teamPoints, opponentPoints) {
        team.games.push({
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        })
    },
}

team.addPlayer("Rico", "Polo", 16);
team.addPlayer("Mark", "Dunkan", 17);
team.addPlayer("James", "Dinno", 13);

team.addGames("Denver", 37, 38);
team.addGames("Kaly", 43, 22);
team.addGames("Denver", 25, 33);

team.games.forEach((element) => {
    team.globalScore += element.teamPoints;
});

team.player.forEach((element) => {
    if(element.age > team.olderPlayer) {
        team.olderPlayer = element.age;
    }
});

console.log(team.player, team.games);
console.log("Score total : " + team.globalScore)
console.log("Le joueur le plus agé est de " + team.olderPlayer )