// you can write js here
console.log('exo-2');

var week = "Déso, on est en semaine";
var weekend = "Yep, sors ton barbecue";


var date = new Date();
var testActiveOrNot = false;
var myDate = "";
var myTime = "";
var error = "Mauvais chiffre, entrez un chiffre entre 0 et 6";

function isTestDay(trueOrNot) {
    if(trueOrNot === true) {
        myDate = prompt("Quel est le jour de la semaine ?");
    }
    else {
        myDate = date.getDay();
    }
    return myDate;
}

function isTestHours(trueOrNot) {
    if(trueOrNot === true) {
        myTime = prompt("Quel heure est-il ?");
    }
    else {
        myTime = date.getHours();
    }
    return myTime;
}

isTestDay(testActiveOrNot);
isTestHours(testActiveOrNot);

function messageFromDay(myDate, myTime) {
    if(myDate == 0 || myDate == 6) {
        return weekend;
    }
    else if(myDate == 5 && myTime > 16) {
        return weekend;
    }
    else if (myDate == 1 && myTime < 9) {
        return weekend;
    }
    else if(myDate > 6) {
        return error;
    }
    else {
        return week;
    }
}

console.log("Il est " + myTime + "H");
console.log("Nous sommes le " + myDate + "e jour de la semaine")
console.log(messageFromDay(myDate, myTime));
