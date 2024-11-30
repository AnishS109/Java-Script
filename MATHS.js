console.log(Math)

// MATH.floor)() - remove decimal from a number

console.log(Math.floor(2.99555));
console.log(Math.floor(-2.1000));

// MATH.ceil() - remove decimal from a number and prints +1 in number

console.log(Math.ceil(2.1));
console.log(Math.ceil(-2.1000));

// MATH.round() - round off the number

console.log(Math.round(2.51));
console.log(Math.round(-2.49));

// MATH.random() - give random numbers


const random = () =>{
    let array1 = [1,2,5,7,44,778,232]
    let value = Math.round(Math.random()*7)
    return array1[value]
}
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());

function randomName (){
    let arrayname = ["Anish","Harsh","Yash", "kunnu","Kishu"]
    let name = Math.floor(Math.random()*5)
    return arrayname[name]
}
console.log(randomName());
console.log(randomName());
console.log(randomName());
console.log(randomName());
console.log(randomName());
console.log(randomName());
console.log(randomName());

// area of rectangle

