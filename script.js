let username = prompt('Please enter your username.')
document.getElementById('Userch').innerHTML = `<h1 class="usertext">${username}'s <br> Choice</h1>`
document.getElementById('userScoreDisplay').textContent = `${username}'s Score:`