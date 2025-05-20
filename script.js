let humanScore = 0
let compScore = 0

function getComputerChoice() {
  const num = Math.random()
  let choice
  if (num <= 0.33) {
    choice = 'Rock'
  }
  if (num <= 0.66 && num > 0.33) {
    choice = 'paper'
  }
  if (num > 0.66) {
    choice = 'scissors'
  }

  return choice.toLowerCase()
}

function getHumanChoice() {
  let input = prompt('Enter your move : ')
  return input.toLowerCase()
}

function playRound(human, computer) {
  console.log('You chose ' + human)
  console.log('Computer chose ' + computer)

  if (
    (human == 'rock' && computer == 'paper') ||
    (human == 'paper' && computer == 'scissors') ||
    (human == 'scissors' && computer == 'rock')
  ) {
    compScore++
    console.log('You lose, Computer WON!!')
  } else if (
    (computer == 'rock' && human == 'paper') ||
    (computer == 'paper' && human == 'scissors') ||
    (computer == 'scissors' && human == 'rock')
  ) {
    humanScore++
    console.log('You WON!!')
  } else if (
    (computer == 'rock' && human == 'rock') ||
    (computer == 'paper' && human == 'paper') ||
    (computer == 'scissors' && human == 'scissors')
  ) {
    console.log('Round tie!!')
  }
  console.log('Your Score: ' + humanScore + ' Computer Score: ' + compScore)
}

function getWinner() {
  let winner='COMPUTER' ;
  if(humanScore>compScore){
    winner='YOU';
  }
  console.log('Winner : ' + winner);
}

function playGameOf5() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
  }
  getWinner();
}

playGameOf5();
