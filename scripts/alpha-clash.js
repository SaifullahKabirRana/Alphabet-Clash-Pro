// function play(){
//     // step 1: hide the home screen. to hide the screen add the class hidden to the home screen
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden");
    
//     // step 2: show the playground section
//     const playgroundSection = document.getElementById("play-ground");
//     playgroundSection.classList.remove("hidden");
// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // stop the game if press "Esc"
    if(playerPressed === "Escape"){
        gameOver();
    }

    // key player is expected to press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log("you got a point");

        const currentScore = getTextElementValueById("current-score");
        const updatedScore = currentScore + 1;
        setTextElementValueById("current-score", updatedScore);

        // -----------------------------------------
        // Update score:
        // // 1. get the current score
        // const currentScoreElement = document.getElementById("current-score");
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseFloat(currentScoreText);
        // console.log(currentScore);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log("you missed. you lost a life");

        const currentLife = getTextElementValueById("current-life");
        const updatedLife = currentLife - 1;
        setTextElementValueById("current-life", updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
        // --------------------------------------------------------
        // step-1: get the current life number
        // const currentLifeElement = document.getElementById("current-life");
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseFloat(currentLifeText);

        // // step-2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}


// capture keyboard key press
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame (){
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log("Your random alphabet:",alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
   
}

function play(){
    // hide everything show only the playground
    hideElementById("home-screen");
    hideElementById("final-score")
    showElementById("play-ground");

    // reset score and life
    setTextElementValueById("current-life", 5);
    setTextElementValueById("current-score", 0)
    continueGame();
}
function gameOver(){
    hideElementById("play-ground");
    showElementById("final-score");
    // Update final score
    // 1. get the final score
    const lastScore = getTextElementValueById("current-score");
    console.log(lastScore);
    setTextElementValueById("last-score", lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById("current-alphabet");
    removeBackgroundColorById(currentAlphabet);
}