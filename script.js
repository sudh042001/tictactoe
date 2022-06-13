let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let turn='X' 
let flag=false;
const changeTurn=()=>{
    return turn==='X'?'0':'X';
}
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText && boxtext[e[0]].innerText!=='')
        {
            document.getElementsByClassName('info')[0].innerHTML=boxtext[e[0]].innerText+" Won";
            flag=true;
            document.getElementById('imgbox').src="excited.gif";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}
document.getElementById('reset').addEventListener('click',()=>{
    let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    boxtext.innerHTML='';
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName('info')[0].innerHTML='';
})
document.getElementById('imgbox').src="";
})
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
      if(boxtext.innerHTML === ''){
        boxtext.innerHTML=turn;
        turn=changeTurn();
        audioTurn.play();
        checkwin();
        if(!flag)
        document.getElementsByClassName("info")[0].innerHTML="Turn for " + turn;
    }})
})