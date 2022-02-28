// game script

const playerMove = "ROCK";
const computerMove = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random()*moves.length)];
}

function playRound(playerMove, computerMove){
    playerMove = playerMove.toLowerCase();
    if (playerMove === computerMove){
        return "It's a tie!";
    }
    else if (playerMove === "rock" && computerMove === "scissors" || playerMove === "paper" && computerMove === "rock" || playerMove === "scissors" && computerMove === "paper"){
        playerScore++
        return `You Win! ${playerMove} beats ${computerMove}`;
    }
    else {computerScore++;
        return `You Lose, ${computerMove} beats ${playerMove}`};

}

function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerMove, computerMove);
     } 
     return `${playerScore} to ${computerScore}`
}

console.log(game());