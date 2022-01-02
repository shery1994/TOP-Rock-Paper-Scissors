//function: computeplay.
//define moves in a list
//generate a random whole number between 1 and 3 
//use gnereated number to pick the entry in the list

let moves = ['rock','paper','scissor'];
let pcPoint = 0;
let playerPoint = 0;

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
const compWinResponse = 'you lose'  //need to use variablr in the response
const playerWinResponse = 'you win'
function playRound(playerSelection,computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return responseTie
    }
    else if (playerSelection == "rock") {
        if(computerSelection == 'paper'){
            pcPoint++;
            return compWinResponse
        } else {
            playerPoint++;
            return playerWinResponse
        }
  
    }
    else if (playerSelection == "paper"){
        if(computerSelection=="scissor"){
            pcPoint++;
            return compWinResponse
        }else {
            playerPoint++;
            return playerWinResponse
        }
    }


    else if (playerSelection == "scissor"){
        if(computerSelection=="rock"){
            pcPoint++;
            return compWinResponse
        }else {
            playerPoint++;
            return playerWinResponse
        }
    }
        

    // else {
    //     return playerWinResponse
    // }




}

function game(){
 
    playRound(window.prompt("rock, paper or scissor?"),computerPlay())
    playRound(window.prompt("rock, paper or scissor?"),computerPlay())
    playRound(window.prompt("rock, paper or scissor?"),computerPlay())
    playRound(window.prompt("rock, paper or scissor?"),computerPlay())
    playRound(window.prompt("rock, paper or scissor?"),computerPlay())

}

// this is to test
let playerSelection = window.prompt("rock, paper or scissor?")
//let computerSelection = computerPlay();

//console.log(playRound(playerSelection,computerSelection));
game()

//game function:
//crete a point counter for player and computer
//run playRound, if playRound response = computer win, then add point to computer
//if response = player win, then point to player
//else, no point if tie. message -> lets do this again. 
//first to win 5 points win. 

