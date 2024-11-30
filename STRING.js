//STRINGS

let str = "Anish Saini";
console.log(str);
console.log(str.length);



// TEMPLATE LITERALS

let sentence =  `Anish Saini`
console.log(sentence);


// STRING INTERPOLATION

const obj = {
    item: "pen",
    price: 10
}
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);



// STRING METHOD or FUNCTIONS

let str1 = "anish saini";
console.log(str1.toUpperCase());


let str2 = "ANISH SAINI";
console.log(str2.toLowerCase());


let str3 = "    ANISH     ";
console.log(str3.trim());


let str4 = " My name is anish saini";
console.log(str4.slice(0, 7));


let str5 ="My name is ";
let str6 = "Anish Saini";
console.log(str5.concat(str6,str4));


let str7 = "Anish Saini and my age is 18"
console.log(str7.replace(18,20));


let str8 = "Anish Saini";
console.log(str8.charAt(0));




