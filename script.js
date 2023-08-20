function getComputerChoice(){
    let randNum = Math.floor(Math.random() * 3)
    switch (randNum){
        case 0:
            return "Rock";
            break;

        case 1:
            return "Paper";
            break;

        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection)
    let playerScore = 0;
    let computerScore = 0;

    if (playerSelection === computerSelection){
        return `It's a tie! You both chose ${playerSelection}`
    } else if (playerSelection === "Rock"){
        if (computerSelection === "Paper"){
            computerScore++;
            return "You lose! Paper beats rock";
        } else{
            playerScore++
            return "You win! Rock beats Scissors"
        }

    } else if (playerSelection === "Scissors"){
        if (computerSelection === "Rock"){
            computerScore++;
            return "You lose! Rock beats Scissors";
        } else{
            playerScore++
            return "You win! Scissors beats Paper"
        }

    } else if (playerSelection === "Paper"){
        if (computerSelection === "Scissors"){
            computerScore++;
            return "You lose! Scissors beats Paper";
        } else{
            playerScore++
            return "You win! Paper beats Rock"
        }

    }

}

function capitalize(str){
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1)
    return str;
}

