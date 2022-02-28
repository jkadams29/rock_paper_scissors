// game script

function computerPlay(){
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random()*moves.length)];
}

console.log(computerPlay());