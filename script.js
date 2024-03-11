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

document.getElementById('userpic').src = `${userChoice}.jpg`;
document.getElementById('comppic').src = `${compChoice}.jpg`;

}
function whoWon(userChoice,compChoice ){
    if (userChoice === compChoice){
        tie()
    } else if (UserChoice === 'rock' && compChoice === 'paper' || UserChoice === 'scissors' && compChoice === 'rock' || UserChoice === 'paper' && compChoice === 'scissors'){
        Compwins()
}else if (UserChoice === 'paper' && compChoice === 'rock' || UserChoice === 'rock' && compChoice === 'scissors' || UserChoice === 'scissors' && compChoice === 'paper'){
    Userwins()
}
}
function Userwins(){
    document.getElementById('score').textContent  = "WINNER:You won that round!";
    let UserScore= UserScore++
    document.getElementById('userScoreDisplay').textContent  = ""`${username}'s Score:'" + "UserScore"`; 
    if(UserScore>=3){ userWinGame()}

}
function userWinGame(){
    document.getElementById('score').textContent  = "WINNER:You won the game! Congrats!";
}
function Compwins(){
    document.getElementById('score').textContent  = "WINNER:You lost that round!";
    let CompScore= CompScore++
    document.getElementById('compScoreDisplay').textContent  = ""COMPUTER's Score:" + "CompScore"`; 
    if(UserScore>=3){ compWinGame()}

}
function compWinGame(){
    document.getElementById('score').textContent  = "WINNER:You lost the game. Try again!";
}
function tie(){
    document.getElementById('score').textContent  = "WINNER:It's a tie!";
}