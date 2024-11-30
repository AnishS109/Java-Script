/*  FOR LOOP */

for(let i = 1; i<=5 ; i++){
    console.log("Anish Saini");
}


let sum = 0;
for( let i = 1; i<=5; i++){
    sum = sum + i;
    }
    console.log("Answer =",sum);


let a = prompt("Enter a Number :");
let SUM = 0;
for(let i = 1; i<=a ; i++){
    SUM = SUM + i;
}    
console.log("Answer =",SUM);



/*  WHiLE LOOP */

let SuM = 0;
let i = 1;
while(i<=5){
    i++
    console.log("i =",i)
    SuM = SuM + i;
}
console.log("Answer =",SuM);



/*  FOR-OF LOOP */

let str = "Anish Saini";
let length = 0;

for(let i of str){
    console.log("i =",i)
    length++
}
console.log("Size =",length);



/*  FOR-IN LOOP */


const student = {
    Fullname: "Anish Saini",
    class: "12th",
    cgpa: 8.2,
} 
for( let i in student){
    console.log(i);
}