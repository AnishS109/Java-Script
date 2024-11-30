/* Arithmetic Operators*/

let a = 9;
let b = 3;

console.log("a =",a,"& b =",b);
console.log("a + b =",a+b);
console.log("a - b =", a-b);
console.log("a / b =",a/b);
console.log("a * b =", a*b);
console.log("a % b =",a%b);
console.log("a ** b = ",a**b);

/* Unary Operators */

a++;
b--;
console.log("a =",a);
console.log("b =",b);

/*  Assignment Operator */

let c = 6;
let d = 3;
let e = 4;
let f = 5;
let g = 10

c += 4;
d -= 1;
e *= 2;
f %= 2;
g **= 2;
console.log("c =",c);
console.log("d =",d);
console.log("e =",e);
console.log("f =",f);
console.log("g =",g);

/* Comparison Operator*/

let h = 2;
let i = 4;

console.log("h == i", h==i);
console.log("h != i", h!=i);

let j = 2;
let k = "2";

console.log("j === k", j===k);
console.log("j !== k", j!==k);

/* Logical Operators */

let l = 5;
let m = 6;

let cond1 = m>l;
let cond2 = l === 6;

console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 || cond2 =", cond1 || cond2);
console.log("! m>l =", !(m>l));


/* Ternary operators */

let aged = 19;

let result = aged > 18 ? "adult" : "not adult";
console.log(result);