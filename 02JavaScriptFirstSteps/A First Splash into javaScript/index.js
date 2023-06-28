let randomNumber = Math.floor(Math.random()*100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

const resetGame = () => {

    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for(let resetPara of resetParas){
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random()*100)+1;
}

const setGameOver = () => {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement("button");
    resetButton.textContent = "Start New Game!";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
}

const checkGuess = ()=>{
    const userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Previous Guesses:";
    }
    guesses.textContent += ` ${userGuess}`;

    if(userGuess === randomNumber){
        lastResult.textContent = `Congratulations! You got it right!`;
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
    }else if(guessCount === 2){
        lastResult.textContent = "!!Game Over!!";
        lowOrHi.textContent = "";
        setGameOver();
    }else{
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was too low!";
        }else{
            lowOrHi.textContent = "Last guess was to high!"
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}


guessSubmit.addEventListener("click", checkGuess);


