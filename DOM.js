/*document.getElementById("header");
console.log(header)

let heading = document.getElementsByClassName("top");
console.log(heading);

let elemeent1 = document.querySelector(".top")
console.dir(elemeent1);

let elementall = document.querySelectorAll("p");
console.dir(elementall);

let pan = document.querySelectorAll(".Para");
console.dir(pan);

let heading2 = document.querySelector("h1"); 

let anish = document.querySelector("div");
console.log(anish);
let id = anish.getAttribute("class");
console.log(id);

let Para = document.querySelector(".para");
console.log(Para.getAttribute("class"));

Para.setAttribute("class","Anish");
console.log(Para.getAttribute("class")); 

let ani = document.querySelector(".top");
ani.style.backgroundColor = "White";
ani.style.height = "200px";

let newbtn = document.createElement("button");
newbtn.innerText = "Click Me";
console.log(newbtn);

let divv = document.querySelector("div");
divv.after(newbtn);

let para = document.querySelector("p");
para.remove();*/


function Data(dataId) {
    return new Promise((resolve,reject) =>{
       setTimeout(() => {
        console.log(dataId);
        resolve("SUCCESS");
       }, 5000);
    })
}
  
async function getdata () {
    await Data(1);
    await Data(2);
}

let datadone = getdata()
console.log(datadone)
