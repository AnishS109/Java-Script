for(let i = 1;i<=100;  i++){
    if (i%2 == 0)
        console.log(i)
}


let gameNum = 25;
let userNum = prompt("Guess the game number");
console.log(userNum);

while (userNum != gameNum) {
    userNum = prompt("You entered wrong number ! Guess the game number again");
}
console.log("Congratulations, you guess the right number");