'use strict';

//selecting Element
const thrown1El = document.querySelector('#thrown--0');
const thrown2El = document.querySelector('#thrown--1');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const btnStone = document.querySelector('.btn-stone');
const statelabel = document.querySelector('.state-label');
const btnReset = document.querySelector('.btn-reset');
const score = document.querySelector('.state-score');

//starting condition
thrown1El.textContent = '';
thrown2El.textContent = '';
let recordThrow = [0, 0];
let recordScore = [0, 0];
let playing = false;

//computer throw
function computerThrow() {
  recordThrow[1] = Math.trunc(Math.random() * 3 + 1);
}

//show the throw
function showThrow(player, thrown) {
  switch (thrown) {
    case 1:
      player.textContent = '🖐';
      break;
    case 2:
      player.textContent = '✌️';
      break;
    case 3:
      player.textContent = '👊';
      break;
  }
}

//check who wins
function checkWinner() {
  //tie
  if (recordThrow[0] === recordThrow[1]) {
    statelabel.textContent = 'Tie !';
    //win
  } else if (
    recordThrow[0] - recordThrow[1] === 1 ||
    recordThrow[0] - recordThrow[1] === -2
  ) {
    statelabel.textContent = 'You win !';
    recordScore[0] += 1;
    //lose
  } else {
    statelabel.textContent = 'You lose !';
    recordScore[1] += 1;
  }
  score.textContent = `${recordScore[0]} - ${recordScore[1]}`;
}

//Game Flow
function gameFlow() {
  playing = true;
  btnReset.classList.remove('hidden');
  computerThrow();
  showThrow(thrown1El, recordThrow[0]);
  showThrow(thrown2El, recordThrow[1]);
  checkWinner();
}

//reset
btnReset.addEventListener('click', function () {
  playing = false;
  recordThrow = [0, 0];
  recordScore = [0, 0];
  thrown1El.textContent = '';
  thrown2El.textContent = '';
  score.textContent = '0 - 0';
  statelabel.textContent = 'Score';
  btnReset.classList.add('hidden');
});

//throw
btnPaper.addEventListener('click', function () {
  recordThrow[0] = 1;
  gameFlow();
});

btnScissors.addEventListener('click', function () {
  recordThrow[0] = 2;
  gameFlow();
});

btnStone.addEventListener('click', function () {
  recordThrow[0] = 3;
  gameFlow();
});
