// Variables I will need for Loop
let guessnum = 15
let guess = 0

// This is used for my loop for 'guess my age'
while (guess !== guessnum) {
  guess = prompt('Guess a number between 1 and 20')
  guess = parseInt(guess)
  if (guess > guessnum) {
    alert('Your Guess is High! Try Again!')
  } else if (guess < guessnum) {
    alert('Your Guess is Low! Try Again!')
  } if (guessnum === guess) {
    alert('You WIN!!')
  }
}
