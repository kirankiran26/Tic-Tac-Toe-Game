let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let xturn=true;
const winingpatt=[
    [0,3,6],
    [0,1,2],
    [0,4,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=> {
   box.addEventListener("click",()=> {
    if (xturn) {
         box.innerText="X";
        
    }
    else {
        box.innerText="O";
        
    }
    xturn=!xturn;
    box.disabled=true;
   })
})