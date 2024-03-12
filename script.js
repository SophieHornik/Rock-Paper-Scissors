let username = prompt('Please enter your username.')
document.getElementById(
  'Userch'
).innerHTML = `<h1 class="usertext">${username}'s <br> Choice</h1> <img id="userpic" src="usericonn (1).png" alt="..." />`
document.getElementById('userScoreDisplay').textContent = `${username}'s Score: 0`

let userScore = 0
let compScore = 0


function playGame (userChoice) {
  //Get computer choice
  let randomNumber = Math.floor(Math.random() * 3)
  let compChoice
  if (randomNumber === 0) {
    compChoice = 'rock'
  } else if (randomNumber === 1) {
    compChoice = 'paper'
  } else if (randomNumber === 2) {
    compChoice = 'scissors'
  }

  document.getElementById('userpic').src = `${userChoice}.jpg`
  document.getElementById('comppic').src = `${compChoice}.jpg`
  //Call who Won
  whoWon(userChoice, compChoice)
}

function whoWon (userChoice, compChoice) {
  if (userChoice === compChoice) {
    tie()
  } else if (
    (userChoice === 'rock' && compChoice === 'paper') ||
    (userChoice === 'scissors' && compChoice === 'rock') ||
    (userChoice === 'paper' && compChoice === 'scissors')
  ) {
    compWins()
  } else if (
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    userWins()
  }
}

//Game Result Functions

function tie () {
  document.getElementById('winnerDisplayMsg').textContent = "It's a tie!"
}

function userWins () {
  document.getElementById('winnerDisplayMsg').textContent ='You won that round!'
  userScore = userScore + 1
  document.getElementById('userScoreDisplay').textContent = `${username}'s Score: ${userScore}`
  if (userScore >= 3) {
    userWinGame()
  }
}

function compWins () {
  document.getElementById('winnerDisplayMsg').textContent ='You lost that round!'
  compScore = compScore + 1
document.getElementById('compScoreDisplay').textContent = `Comp's Score: ${compScore}`

  if (compScore >= 3) {
    compWinGame()
  }
}
function compWinGame () {
  document.getElementById('winnerDisplayMsg').textContent ='You lost the game. Try again!'
  document.getElementById('hideAtEndOfGame1').classList.toggle('d-none')
document.getElementById('hideAtEndOfGame2').classList.toggle('d-none')


}
function userWinGame () {
  document.getElementById('winnerDisplayMsg').textContent ='You won the game! Congrats!'
  document.getElementById('hideAtEndOfGame1').classList.toggle('d-none')
document.getElementById('hideAtEndOfGame2').classList.toggle('d-none')

}
