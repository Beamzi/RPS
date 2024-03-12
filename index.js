
playerScore = 0;
compScore = 0;
tie = 0;

for (let i = 0; i < 5; i++) {

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
}


if (playerScore > compScore) alert(`you won! ${playerScore} to ${compScore}`);
else if(compScore > playerScore) alert( `you lost ${compScore} to ${playerScore}`);
else if (playerScore === compScore) alert(`its a tie! ${playerScore} to ${compScore}`);

/*
if (playerScore > compScore) console.log(`you won! ${playerScore} to ${compScore}`);
else if(compScore > playerScore) console.log( `you lost ${compScore} to ${playerScore}`);
else if (playerScore === compScore) console.log(`its a tie! ${playerScore} to ${compScore}`);
*/
