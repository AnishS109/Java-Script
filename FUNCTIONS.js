// FUNCTIONS

function sum(a,b){
    s = a+b;
    return s;
}
let val = sum(5,8);
console.log(val);

// ARROW - FUNCTIONS

const Sum = (a,b)=>{
    console.log(a+b)
}
let val2 = Sum(10,20);
console.log(val2);

const Mul = (a,b)=>{
    console.log(a*b)
}
let val3 = Mul(4,5);
console.log(val3);


// For Each Loops in Arrays

let arr =[10,20,30,40,50];

arr.forEach((value)=>{
  console.log(value);  
});


