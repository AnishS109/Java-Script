let userScore = 0;
let compScore = 0;

const item1 = document.querySelector(".STONE");
const item2 = document.querySelector(".PAPER");
const item3 = document.querySelector(".SCISSOR");


const gencompChoice1 = () =>{
    const options = ["STONE", "PAPER", "SCISSOR"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const gencompChoice2 = () =>{
    const options = ["STONE", "PAPER", "SCISSOR"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const gencompChoice3 = () =>{
    const options = ["STONE", "PAPER", "SCISSOR"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const userChoice1 = item1.getAttribute("class")
const playGame1 =(userChoice) =>{
    console.log("User Choice =", userChoice1)
    const compChoice = gencompChoice1();
    console.log("Comp Choice =",compChoice)
}
const userChoice2 = item2.getAttribute("class")
const playGame2 =(userChoice) =>{
    console.log("User Choice =", userChoice2)
    const compChoice = gencompChoice2();
    console.log("Comp Choice =",compChoice)
}
const userChoice3 = item3.getAttribute("class")
const playGame3 =(userChoice) =>{
    console.log("User Choice =", userChoice3)
    const compChoice = gencompChoice3();
    console.log("Comp Choice =",compChoice)
}
item1.addEventListener("click" ,  () =>{
    playGame1();
})
item2.addEventListener("click" , () =>{
        playGame2();   
    })
item3.addEventListener("click" , () =>{
        playGame3();
    })

const drawGame = () =>{
    console.log("Draw Game");
}
const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Win")
    }
    else {
        console.log("You Loose")
    }
}
if (userChoice1 === compChoice){
    drawGame();
} else {
    let userWin = true;
    if(userChoice1 === "STONE"){
        userChoice1 = compChoice === "PAPER" ? false : true;
    } else if (userChoice1 === "PAPER"){
        userChoice1 = compChoice === "SCISSOR" ? false : true;
    } else {
        userChoice1 === compChoice === "ROCK" ? false: true;
    }
    showWinner(userWin);
}