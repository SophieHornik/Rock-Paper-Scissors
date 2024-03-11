let username = prompt('Please enter your username.')
document.getElementById('Userch').innerHTML = `<h1 class="usertext">${username}'s <br> Choice</h1> <img id="userpic" src="usericonn (1).png" alt="..." />`
document.getElementById('userScoreDisplay').textContent = `${username}'s Score:`

function playGame(userChoice){
//Get computer choice
let randomNumber = math.Floor(Math.random() * 3);
let compChoice
if (randomNumber === 0){
    compChoice="rock"
} else if (randomNumber === 1 ){
    compChoice = "paper"
}  else if (randomNumber === 2 ){
        compChoice = "scissors"}

//display user choice
}

