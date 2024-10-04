// function play(){
//     // hide the home section when clicked the play button
//     const HomeSection=document.getElementById('home-section');
//     HomeSection.classList.add('hidden');
//     // unhide the playground section
//     const playgroundSection= document.getElementById('playground-section');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
   alphabet= generteRandomAlphabet();
   console.log(alphabet)
}

function play(){
    // hide home section when clicked play button
    hideElelmentById('home-section');
    // unhide playground section
    unhideElementById('playground-section');
    continueGame()
}

