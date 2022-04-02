let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("./audio/Select-click.wav");
let newAudio = new Audio("./audio/water-scifi-bleep.wav");
let winAudio = new Audio("./audio/game-click.wav");

const init = () => {
    computerGuess = Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    
    document.getElementById("gameArea").style.display = "none";
};

 const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
 };


// Reload the page

const newGameBegin = () => {
    window.location.reload();
    
};

// Start new game

const startNewGame = () =>{
    // newAudio.play();
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
};


// Main Logic of Our App

const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [... userGuess, userNumber];
    document.getElementById("Guesses").innerHTML= userGuess;


    // check the value low or high
    if(userGuess.length < maxGuess)
{
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML = "Your guess is High 😲";
        userNumberUpdate.value = "";
    }else if (userNumber < computerGuess){
        userGuessUpdate.innerHTML = "Your guess is Low 😌";
        userNumberUpdate.value = "";
    }else{
        userGuessUpdate.innerHTML = "It's Correct 😀 ";
        userNumberUpdate.value = "";
        winAudio.play();
        startNewGame();
    }
}else{
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML = `You loose!! Correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
    }else if (userNumber < computerGuess){
        userGuessUpdate.innerHTML = `You loose!! Correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
    }else{
        userGuessUpdate.innerHTML = "It's Correct😀 ";
        userNumberUpdate.value = "";
        winAudio.play();
        startNewGame();
    }
}

    document.getElementById("attempts").innerHTML=userGuess.length;
};



const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};