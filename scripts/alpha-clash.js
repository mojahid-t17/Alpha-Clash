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

// console.log("user:", usersAlphabet, "screen:",screenAlphabet)

if(usersAlphabet===screenAlphabet){
    console.log('u pressed the correct alphabet');
    removeBgById(screenAlphabet)
    continueGame()
}
else{
    console.log('wrong alphabet')
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
    hideElelmentById('home-section');
    // unhide playground section
    unhideElementById('playground-section');
    continueGame()
}

