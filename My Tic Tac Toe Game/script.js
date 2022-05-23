console.log("Welcome to Tic Tac Toe");
var turn = "X";
// function to change turn
const changeturn=()=>{
    return turn === "X"?"0":"X";
}

//  function to check win
const checkwin = ()=>{}

//  gane logic
var boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innText === '') {
            boxtext.innerText = turn;
            changeturn();
            checkwin();
             document.getElementsByClassName(turn)[0].innerText = "Turn for "+turn;
        }
    })
})