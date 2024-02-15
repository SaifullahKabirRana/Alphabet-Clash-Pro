function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#FFA500]");
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-[#FFA500]");
}

function getARandomAlphabet(){
    // get or create on alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");
    // console.log(alphabets);

    // get a random index between 0-25
    const randomNumber  = Math.random()*25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}
