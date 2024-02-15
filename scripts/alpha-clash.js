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
    console.log("player pressed",playerPressed);

    // get expected the press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check match or not
    if(playerPressed === expectedAlphabet){
        console.log("you got a point");
    }
    else{
        console.log("you missed. you lost a life");
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
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}