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

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock")
const paper= document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const resultsRound = document.querySelector(".results")
const playerScoreDisplay = document.querySelector(".playerscore")
const computerScoreDisplay = document.querySelector(".computerscore")

rock.addEventListener("click", () =>{
 
    let computerChoice = getComputerChoice();
    if (computerChoice == "Rock"){
        resultsRound.textContent = "Computer chose Rock, it's a tie!"

    } else if(computerChoice == "Paper"){
        resultsRound.textContent = "Computer chose Paper, you lose!"
        computerScore++;
        computerScoreDisplay.textContent = computerScore


    } else if(computerChoice == "Scissors"){
        resultsRound.textContent = "Computer chose Scissors, you win!"
        playerScore++;
        playerScoreDisplay.textContent = playerScore
    }
    if (computerScore == 5){
        resultsRound.textContent = `The computer won ${computerScore} games and you won${playerScore}games,the computer wins!`
        computerScore = 0;
        playerScore = 0;
        computerScoreDisplay.textContent = computerScore
        playerScoreDisplay.textContent = playerScore
    
    }
    
    if (playerScore == 5){
        resultsRound.textContent = `The computer won ${computerScore} games and you won${playerScore}games, you win!`
        computerScore = 0;
        playerScore = 0;
        computerScoreDisplay.textContent = computerScore
        playerScoreDisplay.textContent = playerScore
    
    }
    
})

paper.addEventListener("click", () =>{
 

    let computerChoice = getComputerChoice();
    if (computerChoice == "Paper"){
        resultsRound.textContent = "Computer chose Paper, it's a tie!"

    } else if(computerChoice == "Scissors"){
        resultsRound.textContent = "Computer chose Scissors, you lose!"
        computerScore++;
        computerScoreDisplay.textContent = computerScore


    } else if(computerChoice == "Rock"){
        resultsRound.textContent = "Computer chose Rock, you win!"
        playerScore++;
        playerScoreDisplay.textContent = playerScore
    }
    if (computerScore == 5){
        resultsRound.textContent = `The computer won ${computerScore} games and you won${playerScore}games,the computer wins!`
        computerScore = 0;
        playerScore = 0;
        computerScoreDisplay.textContent = computerScore
        playerScoreDisplay.textContent = playerScore
    
    }
    
    if (playerScore == 5){
        resultsRound.textContent = `The computer won ${computerScore} games and you won${playerScore}games, you win!`
        computerScore = 0;
        playerScore = 0;
        computerScoreDisplay.textContent = computerScore
        playerScoreDisplay.textContent = playerScore
    
    }
})

scissors.addEventListener("click", () =>{
   
    let computerChoice = getComputerChoice();
    if (computerChoice == "Scissors"){
        resultsRound.textContent = "Computer chose Scissors, it's a tie!"

    } else if(computerChoice == "Rock"){
        resultsRound.textContent = "Computer chose Rock, you lose!"
        computerScore++;
        computerScoreDisplay.textContent = computerScore


    } else if(computerChoice == "Paper"){
        resultsRound.textContent = "Computer chose Paper, you win!"
        playerScore++;
        playerScoreDisplay.textContent = playerScore
    }
    if (computerScore == 5){
        resultsRound.textContent = `The computer won ${computerScore} games and you won${playerScore}games,the computer wins!`
        computerScore = 0;
        playerScore = 0;
        computerScoreDisplay.textContent = computerScore
        playerScoreDisplay.textContent = playerScore
    
    }
    
    if (playerScore == 5){
        resultsRound.textContent = `The computer won ${computerScore} games and you won${playerScore}games, you win!`
        computerScore = 0;
        playerScore = 0;
        computerScoreDisplay.textContent = computerScore
        playerScoreDisplay.textContent = playerScore
    
    }

})

