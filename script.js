'use strict';
//assign variables to elements
const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore1El = document.getElementById('current--0');

let currentScore = 0;

//clear the players scores and hide the dice
score1El.textContent = 0;
score2El.textContent = 0;

btnRollDice.addEventListener('click', function () {
    const dice = Math.trunc(Math.random()*6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`;
    if (dice > 1) {
        currentScore += dice;
        currentScore1El.textContent = currentScore;
    } else {

    }
    console.log(dice);
})