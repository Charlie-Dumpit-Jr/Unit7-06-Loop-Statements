// Variables I will need for Loop
let number = 15
let guess = 0

// This is used for my loop for 'guess my age'
while (guess != number) {
  guess = prompt ('Guess a number between 1 and 20')
  guess = parseInt(guess)
  if (guess > number) {
    alert('Your Guess is High! Try Again!')
  } else if (guess < number) {
    alert('Your Guess is Low! Try Again!')
  } if (number === guess) {
    alert('You WIN!!')
  } 
  }
