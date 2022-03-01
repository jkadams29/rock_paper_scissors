let playerScore = 0;
let computerScore = 0;
let playerMove = "rock";
const moves = ["rock", "paper", "scissors"];
let result = ["win", "lose", "tie"];
const computerMove = computerPlay();
const outcome = playRound(playerMove, computerMove);

// Return PC Move
function computerPlay(){
    return moves[Math.floor(Math.random() * moves.length)];
}

// console.log(computerMove)

// Single Round
function playRound(a, b){
    if (a == b){
        return result[2]
    }
    else if (a == moves[0] && b == moves[2] || a == moves[1] && b == moves[0] || a == moves[2] && b == moves[1]){
        return result[0]
    }
    else {
        return result[1]
    }
}

// Single Game
function game(){
    if (outcome == "win"){
        playerScore++
        console.log("Winner");
    }
    else if (outcome == "lose"){
        computerScore++
        console.log("Loser");
    }
    else {
        console.log("Tie")
    }
    console.log(playerScore, computerScore)
}

game()


