let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let turnO=true;

const winpatterns =[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];
const resetGame=()=>{
turnO =true;
enabledBoxes();
msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText ="o";
            turnO =false;
        }
        else{
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const shoWinner=(Winner)=>{
  msg.innerText=`Congratulation Winner is ${Winner} ` ;
  msgContainer.classList.remove("hide");
  disabledBoxes();
}

const checkWinner=()=>{
    for ( let patten of winpatterns){
        let pos1valu =boxes[patten[0]].innerText;
        let pos2valu =boxes[patten[1]].innerText;
        let pos3valu =boxes[patten[2]].innerText;  

        if(pos1valu !=""&& pos2valu !=""&&pos3valu !=""){
            if(pos1valu===pos2valu&&pos2valu===pos3valu){
                console.log("winner",pos1valu);
                shoWinner(pos1valu);
            }
        }
    }
   
} 

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);