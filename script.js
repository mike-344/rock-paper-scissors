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
    


}

function capitalize(str){
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1)
    return str;
}

