// PROJECT - 1

function countVowels(str){
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count++;
        }
    }
    console.log(count);
} 
countVowels("Anish Saini");


// PROJECT - 2
const countvowels = (strr)=>{
    Count = 0;
    for (const CHAR of strr){
        if (CHAR === "a" || CHAR === "e" || CHAR === "i" || CHAR === "o" || CHAR === "u")
        {
            Count++;
        }
    }
    console.log(Count);
}
countvowels ("Anish snbdagweruiuasoxnae2uif");

//PROJECT - 3

let arr = [2,3,4,5,6];

arr.forEach((arr)=>{
     console.log(arr*arr);
});


//Project - 4

let marks = [82,34,56,77,56,90,32,34,90,91,92,93,94]
let filtermarks = marks.filter((val)=>{
  if (val >=90)
    return val;
})
console.log(filtermarks); 


//Project - 5

let n = prompt("Enter a number")
arr = [];
for (i=0;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

const sum = arr.reduce((prev,current)=>{
    return prev+current;
})
console.log(sum);

const product = arr.reduce((previous,curr)=>{
    return previous/curr;
})
console.log(product);
