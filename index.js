let playerScore = 0;
let compScore = 0;
let playerChoice = '';



const allButtons = document.querySelectorAll('.gameButtons');

allButtons.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    allButtons.forEach((btn) => {
      btn.classList.remove('onClickButtons');
    });
    setTimeout(() => {
      buttons.classList.add('onClickButtons');
    }, 10);
  });
});



let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playerChoice = 'rock';
  round();
});


let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playerChoice = 'paper';
  round();
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playerChoice = 'scissors';
  round();
});

const compChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  let resultChoice = '';

  if (randomNumber === 0) resultChoice = 'rock';
  else if (randomNumber === 1) resultChoice = 'paper';
  else if (randomNumber === 2) resultChoice = 'scissors';
  return resultChoice;
};

const round = () => {
  const comp = compChoice(); // Call compChoice once and store the result
  let player = '';

  if (playerChoice === comp) {
    player = 'tie';
  } else if (playerChoice === 'rock' && comp === 'paper') {
    player = 'loss';
  } else if (playerChoice === 'rock' && comp === 'scissors') {
    player = 'win';
  } else if (playerChoice === 'paper' && comp === 'rock') {
    player = 'win';
  } else if (playerChoice === 'paper' && comp === 'scissors') {
    player = 'loss';
  } else if (playerChoice === 'scissors' && comp === 'paper') {
    player = 'win';
  } else if (playerChoice === 'scissors' && comp === 'rock') {
    player = 'loss';
  }

  const scoreKeep = () => {
    if (player === 'win') playerScore++;
    else if (player === 'loss') compScore++;
  }
  scoreKeep()

  const roundResult = () => {

    if (player === 'win') resultDiv.textContent = `${playerChoice} beats ${comp}, you win`;
    else if (player === 'loss') resultDiv.textContent = `${comp} beats ${playerChoice}, you lose`;
    else if (player === 'tie') resultDiv.textContent = 'It\'s a tie';

    if (player === 'win' || player === 'loss' || player === 'tie') {
      resultDiv2.textContent = `Current Score Player: ${playerScore} Computer: ${compScore}`;
    };

    resultDiv2.classList.add('scoreBoard');
  
  }
  roundResult();

const totalScore = () => {
  if (playerScore === 5) {
    resultDiv3.textContent = 'you win the game!';
  }
  else if (compScore === 5) { 
    resultDiv3.textContent = 'you lose! try again';
  };
  if (playerScore === 5 || compScore === 5) {
    resultDiv2.remove(resultDiv.remove());
    refreshButtonRef.append(refreshButton);
    refreshButton.addEventListener('click', () => {
      refreshButton.classList.toggle('onClickButtons')
    window.location.reload();
    });
  };
};

totalScore();

};




let bodyRef = document.querySelector('body');
let resultDivParent = document.querySelector('.resultDivParent')
let refreshButtonRef = document.querySelector('.refreshButtonContainer')


let resultDiv = document.createElement('div');
resultDiv.classList.add('resultDivs')
resultDivParent.append(resultDiv);



let resultDiv2 = document.createElement('div');
resultDiv2.classList.add('resultDivs');
resultDivParent.append(resultDiv2)

let resultDiv3 = document.createElement('h1');
resultDiv3.classList.add('resultDivs')
resultDivParent.append(resultDiv3);


let refreshButton = document.createElement('button')
refreshButton.classList.add('gameButtons');
refreshButton.textContent = 'play again';







/*

playerScore = 0;
compScore = 0;
tie = 0;

//for (let i = 0; i < 5; i++) {

let random = Math.floor(Math.random(0 - 2) * 3);

let playerChoice = []
playerChoice.push(prompt('type rock, paper or scissors'));



  let compChoice = () => {
    let compresult = '';
    if (random === 0) 
    return compresult = 'rock';
    else if(random === 1) 
    return compresult = 'paper';
    else if (random === 2) 
    return compresult = 'scissors';
    }

    
let round = () => {

  roundResult = '';

    if (playerChoice[0] === 'rock' && compChoice() !== 'rock' && compChoice() !== 'paper') 
    roundResult = ['win', 'Rock beats scissors, you win!'];
    else if (playerChoice[0] === 'rock' && compChoice() !== 'rock' && compChoice() !== 'scissors') 
    roundResult = ['lose', 'Paper beats rock, you lose!'];
    else if (playerChoice[0] === 'rock' && compChoice() === 'rock') 
    roundResult = ['tie', 'Rock on... rock?, it\'s a tie!'];

    else if (playerChoice[0] === 'paper' && compChoice() !== 'rock' && compChoice() !== 'paper') 
    roundResult = ['lose', 'Scissors beats paper, you lose!'];
    else if (playerChoice[0] === 'paper' && compChoice() !== 'paper' && compChoice() !== 'scissors') 
    roundResult = ['win', 'Paper beats rock, you win!'];
    else if (playerChoice[0] === 'paper' && compChoice() === 'paper') 
    roundResult = ['tie', 'paper on paper? wow... it\'s a tie!'];

    else if (playerChoice[0] === 'scissors' && compChoice() !== 'scissors' && compChoice() !== 'paper') 
    roundResult = ['lose', 'Rock beats scissors, you lose!'];
    else if (playerChoice[0] === 'scissors' && compChoice() !== 'rock' && compChoice() !== 'scissors') 
    roundResult = ['win', 'Scissors beats paper, you win!'];
    else if (playerChoice[0] === 'scissors' && compChoice() === 'scissors') 
    roundResult = ['tie', 'Scissor Scissor, it\'s a tie!'];

      
    if (roundResult[0] === 'win') playerScore++;
    else if (roundResult[0] === 'lose') compScore++;
    else if (roundResult[0] === 'tie') tie++;


    alert(roundResult[1])
  //  console.log(roundResult[1])
}

round();
//}

const buttons = document.querySelectorAll('button')
buttons.forEach((buttonEvent) => {
  buttonEvent.addEventListener('click', round)
});


if (playerScore > compScore) alert(`you won! ${playerScore} to ${compScore}`);
else if(compScore > playerScore) alert( `you lost ${compScore} to ${playerScore}`);
else if (playerScore === compScore) alert(`its a tie! ${playerScore} to ${compScore}`);




/*
if (playerScore > compScore) console.log(`you won! ${playerScore} to ${compScore}`);
else if(compScore > playerScore) console.log( `you lost ${compScore} to ${playerScore}`);
else if (playerScore === compScore) console.log(`its a tie! ${playerScore} to ${compScore}`);
*/


