// you can write js here
console.log('hello from file');

// Prompt permet d'afficher un popup avec une zone de texte à remplir
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

// On récupère les Kelvins et on réduit de 273 pour obtenir la température en Celsius
var celsius = kelvins - 273;

// On créé la formule afin d'obtenir les Fahrenheits
var fahrenheits = celsius * (9 / 5) + 32;


// Affiche la température en Kelvins
console.log(kelvins);

// Affiche la température en Celsius
console.log(celsius);

// Affiche la température en Fahrenheits, et arrondit le résultat avec la fonction native floor()
console.log(Math.floor(fahrenheits));