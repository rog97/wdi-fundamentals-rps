////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = move || getInput();
    return move;
}

function getComputerMove(move) {
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
        if ((playerMove === 'rock') && (computerMove === 'scissors')) {
            winner = 'player';
        } else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
            winner = 'player';
        } else if ((playerMove === 'paper') && (computerMove === 'rock')) {
            winner = 'player';
        } else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
            winner = 'computer';
        } else if ((playerMove === 'rock') && (computerMove === 'paper')) {
            winner = 'computer';
        } else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
            winner = 'computer';
        } else if (playerMove === computerMove) {
            winner = 'tie';
        }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner(getPlayerMove(),getComputerMove());    
    while (playerWins < 5 && computerWins < 5) {
        if (winner === 'player') {
            playerWins ++ ;
        } else if (winner === 'computer') {
            computerWins ++ ;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose '+ computerMove);
        console.log('The score is currently '+ playerWins + ' to ' + computerWins + '\n');
    return [playerWins, computerWins];
    }
}

