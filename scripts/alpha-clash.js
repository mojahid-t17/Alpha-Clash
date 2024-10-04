// function play(){
//     // hide the home section when clicked the play button
//     const HomeSection=document.getElementById('home-section');
//     HomeSection.classList.add('hidden');
//     // unhide the playground section
//     const playgroundSection= document.getElementById('playground-section');
//     playgroundSection.classList.remove('hidden');
// }
function handleKeybordEvent(event){
    // find the alphabet from the keyboard
   const usersAlphabet= event.key;
 
// find the screen alphabet
const currentAlphabet= document.getElementById('screen-alphabet');
screenAlphabet=currentAlphabet.innerText.toLocaleLowerCase();
// stop game when press escape button
if(usersAlphabet==='Escape'){
    gameOver();
}
// console.log("user:", usersAlphabet, "screen:",screenAlphabet)
 
if(usersAlphabet===screenAlphabet){
    console.log('u pressed the correct alphabet');
    removeBgById(screenAlphabet)
    continueGame()

     const currentScore=getElementsValueById('current-score');
    //  console.log(currentScore)      

    // ***********set the new Score**********
    const newScore=currentScore+1;

    // set new score 
    setElementValueById('current-score',newScore);
    
   
}
else{
    // console.log('wrong alphabet')
    const lifeScore= getElementsValueById('life-score');
    updatedScore= lifeScore-1;
    setElementValueById('life-score',updatedScore);

       if(updatedScore===0){
        gameOver();
         removeBgById(screenAlphabet)
       }
   
}

}

// find the keybord alphabet
document.addEventListener('keyup', handleKeybordEvent)

function continueGame(){
   alphabet= generteRandomAlphabet();
//    console.log(alphabet)

   const screenAlphabet=document.getElementById('screen-alphabet');
   screenAlphabet.innerText=alphabet;
   addBgById(alphabet)
}


function play(){
    // hide home section when clicked play button
    hideElementById('home-section');
    // hide the result section
    hideElementById('result-section');
    // unhide playground section
    unhideElementById('playground-section');
    continueGame()
}


function gameOver(){
    hideElementById('playground-section');
    unhideElementById('result-section');
      // set the final score
   const finalScore=getElementTextById('current-score');
   const displayFinalScore=document.getElementById('finel-score');
  displayFinalScore.innerText=finalScore;

    // reset the final score and life
    setElementValueById('current-score',0);
    setElementValueById('life-score',5);

   


}
