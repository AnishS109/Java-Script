// PROJECT - 1

/*let heading = document.querySelector("h2");
heading.innerText = heading.innerText + "from Anish Saini";


// PROJECT - 2
let divbox = document.querySelectorAll(".box");
divbox[0].innerText = "Anish Saini";
divbox[1].innerText = "Harsh Saini";
divbox[2].innerText = "Yash Saini"; 


// PROJECT - 3

let newbtn = document.createElement("button");
newbtn.innerText = "Click Me";
console.log(newbtn);

let odd = document.querySelector("body");
odd.before(newbtn);

newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";


// PROJECT - 4

let para = document.createElement("p");
para.innerText = "Anish Saini";
para.className = "P1";
console.log(para);

let bod = document.querySelector("body");
bod.before(para);

para.style.backgroundColor = "black";
para.style.color = "red";*/

// PROJECT - 5



let btn = document.querySelector("button");
let currmode = "light";
btn.addEventListener("mouseover" ,()=> {
    if(currmode === "light"){
        currmode = "dark";
        let bod = document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
      }
    else {
        currmode = "light";
        let bod = document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currmode);
});
