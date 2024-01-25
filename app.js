let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let xturn=true;
const winingpatt=[
    [0,3,6],
    [0,1,2],
    [0,4,8],
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
    winnerchequing();
    xturn=!xturn;
    box.disabled=true;
   })
   
});
const winnerchequing=()=>{
    for (let patten of winingpatt) {
       let posval1=boxes[patten[0]].innerText;
       let posval2=boxes[patten[1]].innerText;
       let posval3=boxes[patten[2]].innerText;
       if (posval1!="" && posval2!="" && posval3!="") {
        if (posval1===posval2 && posval2===posval3) {
            if (xturn) {
                console.log("Winner is  X ");
               }
            else{
                console.log("Winner is O ");
               }
        }
       }
    }
}