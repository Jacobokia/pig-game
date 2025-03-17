'use strict';
//assign variables to elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore1El = document.getElementById('current--0');

let playing = true;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// function to switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//clear the players scores and hide the dice
score1El.textContent = 0;
score2El.textContent = 0;

btnRollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

// Holding the score
btnHold.addEventListener('click', function () {
  if (playing) {
    // adding current score to the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // if current score >= 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceImage.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .remove('player--active');
    } else {
      switchPlayer();
    }
    // Finish the game

    // Switch player
  }
});
