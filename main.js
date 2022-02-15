let prompt = require("prompt-sync")();

/*
# Three Shot Hi Lo

Write a program, `main.js`, that randomly picks a number between 1 and 100. 


Give the user three chances to guess it. If they get it right, tell them so. 

If their guess is off, tell them in which direction they need to guess. And let them guess up to three times. If they get it correct before the third guess, don't ask them additional questions!

## Example  1

```
I'm thinking of a number bewtween 1 and 100. Try to guess it.
> 13

Sorry, too low! Guess again.
> 20

Sorry, too low! Guess again.
> 30

Sorry too low. I was thinking of 40.*/

let randomNum = Math.floor(Math.random()*100);
console.log("You get three guesses to figure out my number")

let wrongAnswerLow = "Your answer is lower than the random number. Try Again."
let wrongAnswerHigh = "Your answer is higher than the guessed number. Try Again."
let correctAnswer = "Yay!! you got with a 3% chance, get job!"

let guess1 = prompt("Your first guess?")

    if (guess1 < randomNum){
    console.log(wrongAnswerLow)
    }

    else if (guess1 > randomNum){
        console.log(wrongAnswerHigh)
    }
    else{
        console.log(correctAnswer)
    }

let guess2 = prompt("Your second guess?")

if (guess2 < randomNum){
    console.log(wrongAnswerLow);
}
else if (guess2 > randomNum){
    console.log(wrongAnswerHigh)
}
else{
    console.log(correctAnswer)
    }
let guess3 = prompt("Your first guess?")

if (guess3 < randomNum){
    console.log(wrongAnswerLow)
}

else if (guess3 > randomNum){
    console.log(wrongAnswerHigh)
    }
else if (guess3 != randomNum){
    console.log(correctAnswer)
    };








// switch(answerRespone()){
//     case firstGuess:
//         console.log(guess);
//         break;  
//     case secondGuess:
//         console.log(guess)
//         guess2;
//         break;
//     case thirdGuess:
//         guess3;
  

// console.log(firstGuess)
// console.log(secondGuess)
// console.log(thirdGuess)


        

    