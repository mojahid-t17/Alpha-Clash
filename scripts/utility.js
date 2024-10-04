function hideElelmentById(id){
    const element=document.getElementById(id);
    element.classList.add('hidden');
}

function unhideElementById(id){
    const element=document.getElementById(id);
    element.classList.remove('hidden')
}


// generate random alphabet

function generteRandomAlphabet(){
    const alphabets='abcdefghijklmnopqrstuvwxyz';
alphabet=alphabets.split('');
// console.log(alphabet);

randomindex=Math.round(Math.random()*25);
// console.log(randomindex);
randomAlphabet=alphabet[randomindex];
// console.log(randomAlphabet)
return randomAlphabet;
}