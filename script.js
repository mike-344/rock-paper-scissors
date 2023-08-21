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


function capitalize(str){
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1)
    return str;
}

function game(){
  
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Enter Rock, Paper, or Scissors:");
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        if (i === 4){
            if (playerScore > computerScore){
                console.log(`You  won ${playerScore} games and the computer won ${computerScore} games. You Win!`)
            } else if (playerScore < computerScore){
                console.log(`You  won ${playerScore} games and the computer won ${computerScore} games. You lose!`)
            } else{
                `You both won ${playerScore} games. It's a tie!`
            }
        }
}
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
   
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

let playerScore = 0;
let computerScore = 0;

game()