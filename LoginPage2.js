let imgDiv = document.createElement("div");
let body = document.querySelector("body");
body.append(imgDiv);

imgDiv.style.height = "1120px";
imgDiv.style.width = "540px"; 
imgDiv.style.position = "absolute";
imgDiv.style.top = "50px";
imgDiv.style.backgroundImage = "url('/JavaScript/anishINSTA.jpeg')";
imgDiv.style.backgroundSize = "cover";

body.style.display = "flex";
body.style.justifyContent = "center"


