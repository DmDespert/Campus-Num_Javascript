// you can write js here

console.log('exo-5');

const input = "Hello world, i'm famous";
const letters = ['a', 'e', 'i', 'o', 'u', 'y'];
let resultArray = [];

console.log(input.length);

for(let i=0; i<input.length; i++) {
    let letter;
    letter = input.charAt(i);

    for(let i=0; i<letters.length; i++) {
        let compare = letters[i];
        if(compare == letter) {
            resultArray.push(letter);
        }
    }
}

console.log(resultArray.join(resultArray).toUpperCase());

