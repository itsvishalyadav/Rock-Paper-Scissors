let humanScore = 0
let compScore = 0

document.getElementById('scr1').textContent = humanScore
document.getElementById('scr2').textContent = compScore
document.getElementById('res').textContent = "Let's Play"

function computerChoice() {
  const num = Math.random()
  if (num <= 0.33) {
    return 'rock'
  } else if (num > 0.33 && num <= 0.66) {
    return 'paper'
  } else {
    return 'scissor'
  }
}

function getWinner(humanScore, compScore) {
  if (humanScore > compScore) {
    alert('YOU WON!!')
  } else if (humanScore < compScore) {
    alert('Winner is Computer')
  } else {
    alert('Match TIED!!')
  }
}

function playRound(human, computer) {
  let result = ''
  console.log('You Chose ' + human)
  console.log('Computer Chose ' + computer)
  result += 'You chose ' + human + '<br>Computer chose ' + computer

  if (
    (human == 'rock' && computer == 'paper') ||
    (human == 'paper' && computer == 'scissor') ||
    (human == 'scissor' && computer == 'rock')
  ) {
    compScore++
    console.log('You lose, Computer WON!!')
    result += '<br><br>You lose, Computer WON!!'
  } else if (
    (computer == 'rock' && human == 'paper') ||
    (computer == 'paper' && human == 'scissor') ||
    (computer == 'scissor' && human == 'rock')
  ) {
    humanScore++
    console.log('You WON!!')
    result += '<br><br>You WON!!'
  } else if (
    (computer == 'rock' && human == 'rock') ||
    (computer == 'paper' && human == 'paper') ||
    (computer == 'scissor' && human == 'scissor')
  ) {
    console.log('Round tie!!')
    result += '<br><br>Round tie!!'
  }
  document.getElementById('scr1').textContent = humanScore
  document.getElementById('scr2').textContent = compScore
  document.getElementById('res').innerHTML = result
  console.log('Your Score: ' + humanScore + ' Computer Score: ' + compScore)
  if (humanScore === 5 || compScore === 5) {
    getWinner(humanScore, compScore)
  }
}

const butns = document.querySelectorAll('button')

butns.forEach((button) => {
  button.addEventListener('click', () => {
    const human = button.id
    const computer = computerChoice()

    playRound(human, computer)
  })
})
