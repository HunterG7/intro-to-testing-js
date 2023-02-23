// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if (input === true || input === false ) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input){
    return (input === 5);
}

function isEven(input){
    input = parseFloat(input);
    if (typeof input === 'number' && isNaN(input) === false) {
        return (input % 2 === 0);
    } else {}
    return false;
}

function isVowel(input){
    input = input.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    vowels.forEach(function(vowel) {
        if (input === vowel) {
            return true;
        }
    });
    return false;
}
console.log(isVowel('A'));