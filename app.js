let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let congbut=document.querySelector("#message");
let messagecont=document.querySelector(".messagecont");
let newgamebtn=document.getElementById("newgamebtn");
let xturn=true;
const winingpatt=[
    [0,3,6],
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];
let count=1;
boxes.forEach((box)=> {
   box.addEventListener("click",()=> {
   if (count==9) {
    drawGame();
   }
    if (xturn) {
         box.innerText="X";
         box.style.color="black";
    }
    else {
        box.innerText="O";
        box.style.color="blue";
    }
    count++;
    winnerchequing();
    xturn=!xturn;
    box.disabled=true;
   })
});
const drawGame=()=> {
    congbut.innerText="No Winner";
    count=0;
    messagecont.classList.remove("hide");
    resetbtn.classList.add("hide")
}
const winnerchequing=()=>{
    for (let patten of winingpatt) {
       let posval1=boxes[patten[0]].innerText;
       let posval2=boxes[patten[1]].innerText;
       let posval3=boxes[patten[2]].innerText;
       if (posval1!="" && posval2!="" && posval3!="") {
        if (posval1===posval2 && posval2===posval3) {
           printingwinnername(posval1);
        }
       }
    }
}
const printingwinnername=(winner)=>{
    resetbtn.classList.add("hide")
    congbut.innerText=`congrajulations winner is  ${winner}`;
    messagecont.classList.remove("hide");
    disabledbut();
}
const disabledbut=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
const enabledbut=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=> {
    xturn=true;
    count=1;
    enabledbut();
   messagecont.classList.add("hide");
};
const newGame=()=>{
    resetbtn.classList.remove("hide");
    messagecont.classList.add("hide")
    xturn=true;
    count=1;
    enabledbut();
   
}
resetbtn.addEventListener("click",resetGame);
newgamebtn.addEventListener("click",newGame)