// Variables I will need for Loop
let age = 15
let guess = 0

// This is used for my loop for 'guess my age'
while (guess !== age) {
  guess = prompt('Guess a number between 1 and 20')
  guess = parseInt(guess)
  if (guess > age) {
    alert('Your Guess is High! Try Again!')
  } else if (guess < age) {
    alert('Your Guess is Low! Try Again!')
  } if (age === guess) {
    alert('You WIN!!')
  }
  }
