////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    move = getInput();
    return move;
}

function getComputerMove(move) {
    move = randomPlay();
    return move;
}

var playerMove = getPlayerMove();
var computerMove = getComputerMove();

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
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var result = getWinner(playerMove, computerMove);
        console.log("Player: " + playerMove + " - Computer: " + computerMove);
        result === 'player'? playerWins += 1 : result === 'computer'? computerWins +=1 : 'tie'
        console.log("Player score: " + playerWins + " - Computer score: " + computerWins + '\n');
    }
    if (playerWins === 5) {
        console.log("Go human beings!");
    } else {
        console.log("Damn you cyborg!");
    }
}
playToFive();
