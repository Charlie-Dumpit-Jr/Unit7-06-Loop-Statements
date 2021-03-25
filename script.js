// Variables I will need for Loop
let num = 15
let guess = 0

// This is used for my loop for 'guess my age'
while (guess !== num) {
  guess = prompt('Guess a number between 1 and 20')
  guess = parseInt(guess)
  if (guess > num) {
    alert('Your Guess is High! Try Again!')
  } else if (guess < num) {
    alert('Your Guess is Low! Try Again!')
  } if (num === guess) {
    alert('You WIN!!')
  }
  }
