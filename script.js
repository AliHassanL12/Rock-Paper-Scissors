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

function playRound(actualPlayerSelection, computerSelection){
    if (actualPlayerSelection === "rock" && computerSelection === 'scissors') {
        console.log("Player wins! Rock beats scissors! ");
        player++;
    }
    if (actualPlayerSelection == 'paper' && computerSelection == 'rock'){
        console.log("Player wins! Paper beats rock!");
        player++;
    }
    if (actualPlayerSelection == 'scissors' && computerSelection == 'paper'){
        console.log("Player wins! Scissors beats paper!");
        player++;
    }
    if (computerSelection === "rock" && actualPlayerSelection === 'scissors') {
        console.log("Computer wins! Rock beats scissors! ");
        computer++;
    }
    if (computerSelection == 'paper' && actualPlayerSelection == 'rock'){
        console.log("computer wins! Paper beats rock!");
        computer++;
    }
    if (computerSelection == 'scissors' && actualPlayerSelection == 'paper'){
        console.log("computer wins! Scissors beats paper!");
        computer++;
    }
    if (actualPlayerSelection == computerSelection){
        console.log("I'm afraid it's a draw");
        computer++;
    }
}

function game(){
    for (let i=0; i < 8; i++){
        let playerSelection = prompt("What will you choose, rock, paper or scissors?");
        let actualPlayerSelection = playerSelection.toLowerCase()
        let computerSelection = getComputerChoice();
        playRound(actualPlayerSelection, computerSelection);
        console.log("Player has", player, " points and computer has ", computer, "points")
        i++; 
    }
}
player = 0
computer = 0
game()