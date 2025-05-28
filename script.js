let humanScore = 0
let compScore = 0

  document.getElementById("yscr").textContent = humanScore;
  document.getElementById("cscr").textContent = compScore;

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

function playRound(human, computer) {
  let act="";
  console.log('You chose ' + human)
  console.log('Computer chose ' + computer)
  act+='You chose ' + human+'<br>Computer chose ' + computer

  if (
    (human == 'rock' && computer == 'paper') ||
    (human == 'paper' && computer == 'scissors') ||
    (human == 'scissors' && computer == 'rock')
  ) {
    compScore++
    console.log('You lose, Computer WON!!')
    act+='<br><br>You lose, Computer WON!!'
  } else if (
    (computer == 'rock' && human == 'paper') ||
    (computer == 'paper' && human == 'scissors') ||
    (computer == 'scissors' && human == 'rock')
  ) {
    humanScore++
    console.log('You WON!!')
    act+='<br><br>You WON!!'
  } else if (
    (computer == 'rock' && human == 'rock') ||
    (computer == 'paper' && human == 'paper') ||
    (computer == 'scissors' && human == 'scissors')
  ) {
    console.log('Round tie!!')
    act+='<br><br>Round tie!!'
  }
  document.getElementById("yscr").textContent = humanScore;
  document.getElementById("cscr").textContent = compScore;
  document.getElementById("actions").innerHTML = act;
  console.log('Your Score: ' + humanScore + ' Computer Score: ' + compScore)
}

function getWinner() {
  let winner = ''
  if (humanScore > compScore) {
    alert('Winner is YOU')
  } else if (humanScore < compScore) {
    alert('Winner is COMPUTER' + winner)
  }
}

function playGameOf5() {
  let clicks = 0
  if (clicks >= 5) {
    return getWinner()
  } else {
    const buttons = document.querySelectorAll('button')

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const playerChoice = button.id
        const computerChoice = getComputerChoice()

        playRound(playerChoice, computerChoice)
        clicks++
        console.log(clicks)
      })
    })
  }
}

playGameOf5()
