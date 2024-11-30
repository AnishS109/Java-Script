// ARRAYS

let marks = [10,20,30,40,50];
console.log(marks);
console.log(typeof marks);
console.log(marks[0]);
for (let index = 0; index < marks.length; index++) {
    console.log(marks[index]);
}
for (let i of marks){
    console.log(i);
}



// ARRAY - MEHTODS

// (1) - PUSH METHOD:
let foodItems = ["Apple","Mango","Banana"];
foodItems.push("chips", "Apple");
console.log(foodItems);

// (2) - POP METHOD:
let heroes = ["Ironman","Batman","Superman", "Antman"];
let deletedItem = heroes.pop();
console.log(heroes);
console.log(`Deleted Item = ${deletedItem}`);

// (3) - ToSTring METHOD:

console.log(heroes.toString());

// (4) - Concat METHOD:

console.log(heroes.concat(foodItems));

// (5) - UnShift METHOD:

let movie = ["Ready","Welcome", "Golmaal"];
movie.unshift("Hera-Pheri");
console.log(movie);

// (6) - Shift METHOD:

movie.shift();
console.log(movie);

// (7) - Slice METHOD:

let arr2 = [10,20,30,40,50];
console.log(arr2.slice(0,3));

// (8) - Splice METHOD:

let arr3 = [1,2,10,11,5,6];
arr3.splice(2,2,3,4)
console.log((arr3).toString());

// (9) - Map METHODS:

let arr10 = [ 10,20,30,40,50];
 let newarr = arr10.map((Value) =>{
    return Value*Value;
 })
 console.log(newarr)


// (10) - FILTER METHODS:

 let arr20= [2,3,4,5,6,7,8,9];
 let newarr1 = arr20.filter((VAluee)=>{
    return VAluee%2==0;
 })
 console.log(newarr1);



// (11) - REDUCE METHODS:

let arr30 = [1,2,3,4,5,6,7,8,9,10];
const putput = arr30.reduce((res,cur)=>{
     return res+cur
});
console.log(`Answer = ${putput}`);
