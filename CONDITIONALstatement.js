/* IF Statement */

age = 25

if (age>=18); {
    console.log("You can vote!");
}
if (age<18) {
    console.log("You cannot vote!");
}

let mode = "dark";
let color;

if (mode === "dark") {
    color = "Black"
}
if (mode === "light") {
    color = "White";
}
console.log("color = ",color);



/* IF - ELSE Statement */

let modde = "light";
let colorr;

if (modde === "Dark") {
    colorr = "Black"
} else {
    colorr = "White"
};

console.log("color =", colorr)

let a = 4;

if (a%2 === 0) {
    console.log("a = Even Number");
} else {
    console.log("a = not a Even Number");
}

/* ELSE - IF Statement */

let age1 = 17;

if (age1<18) {
    console.log("Junior");
}
else if (age1>60) {
    console.log("Senior");
}
else {
    console.log("Middle");
}




let colour = "red";

if (colour === "Dark") {
    colour = "Black";
}
else if (colour === "Blue") {
    colour = "Blue";
}
else if (colour === "Green") {
    colour = "Green";
}
else {
    colour = "Erorr";
}

console.log(colour);