let score = prompt("Enter Your Score")

if (score>=90 && score<=100) {
    console.log("Grade : A");
}
else if (90>score && score>=70) {
    console.log("Grade : B");
}
else if (70>score && score>=60) {
    console.log("Grade : C");
}
else if (60>score && score>=50) {
    console.log("Grade : D");
}
else {
    console.log("Grade : F");
}