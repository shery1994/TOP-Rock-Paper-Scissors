//function: computeplay.
//define moves in a list
//generate a random whole number between 1 and 3 
//use gnereated number to pick the entry in the list

let moves = ['rock','paper','scissor'];
function computerPlay() {
    //let moves = ['rock','paper','scissor'];  //defining a list of moves
    let randomNumber = Math.floor(Math.random() * moves.length); //picking a random number from 1 to 3
    let response = moves[randomNumber]; //selecting the item in the array from the above random number
    console.log(randomNumber);
    
    return response  //this is to return a response in the console
    
}


//alert(computerPlay())  //this will pop up an alert


//turn input from player to all lowercase, this will make it case sensitive. 
//player enters their choice from rock, paper, scissor or something unknown
//each choice is numbered, rock = 0, paper = 1, scissor = 2, else not idenfied.
//if player selection = rock (0) and computerPlays = paper (1) -> computer wins, or computer picks scissor -> player wins

const responseTie = "this is a tie"
const responseError = "i dont know.."

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return responseTie
    }
    else {
        return responseError
    }




}

// this is to test
let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));