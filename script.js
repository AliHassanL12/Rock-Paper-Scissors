function getComputerChoice(){
    const textArray = [
        'rock',
        'paper',
        'scissors'
    ]
    
    let randomIndex = Math.floor(Math.random() * textArray.length);
    let randomElement = textArray[randomIndex];
    return randomElement;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === 'scissors') {
        console.log("Player wins! Rock beats scissors! ");
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log("Player wins! Paper beats rock!");
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log("Player wins! Scissors beats paper!");
    }
    if (computerSelection === "rock" && playerSelection === 'scissors') {
        console.log("Computer wins! Rock beats scissors! ");
    }
    if (computerSelection == 'paper' && playerSelection == 'rock'){
        console.log("computer wins! Paper beats rock!");
    }
    if (computerSelection == 'scissors' && playerSelection == 'paper'){
        console.log("computer wins! Scissors beats paper!");
    }
    if (playerSelection == computerSelection){
        console.log("I'm afraid it's a draw");
    }
    console.log(computerSelection);
    console.log(playerSelection);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
playRound(playerSelection,computerSelection);