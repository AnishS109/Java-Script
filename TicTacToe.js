let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#resetbtn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelectorAll(".msg-container");

let turn0 = true;

let winPatters = [
    [0,1,2], [3,4,5],[6,7,8],
    [0,3,6], [1,4,7],[2,5,8],
    [0,4,8], [2,4,6] ];


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0 === true){
            box.innerText = "X"
            turn0 = false;
        } else {
            box.innerText = "O"
            turn0 = true;
        }       
        box.disabled = true;
        checkWinner();
        })
}
)

const resetGame = ()=>{
  turn0 = true;
  enabledboxes(); 
}

const disabledboxes = () =>
{
  for(let box of boxes){
    box.disabled = true  
  }
}

const enabledboxes = () =>
  {
    for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
      msg.innerText = `Winner`
    }
  }

const showWinner = (winner) =>{
  msg.innerText = `Congratulations, Winner is ${winner}`;
  disabledboxes();
  }


const checkWinner = () =>{
  for(let pattern of winPatters){
    let posi1 = boxes[pattern[0]].innerText;
    let posi2 = boxes[pattern[1]].innerText;
    let posi3 = boxes[pattern[2]].innerText;
  
  if(posi1 !="" && posi2 != "" && posi3 != ""){
    if(posi1 === posi2 && posi2 === posi3){
        console.log("Winner",posi1);
        showWinner(posi1);
        }
  }
}
};

newbtn.addEventListener("click" ,resetGame);
resetbtn.addEventListener("click" ,resetGame);

