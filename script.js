const textArray = [
    'rock',
    'paper',
    'scissors'
]

var randomIndex = Math.floor(Math.random() * textArray.length);
var randomElement = textArray[randomIndex];

console.log(randomElement)