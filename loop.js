let guess = Number(prompt("Guess number"));
let tries = 1

while (guess !== 7) {
  if (guess > 7) {
    console.log("Too high Try a lower number.")
  } else {
    console.log("Too low  Try a higher number.")
  }
  guess = Number(prompt("Guess again"))
  tries++
}
console.log("Correct guess!")
console.log("Number of tries: " + tries)
