const emp = {emptax (){
           console.log("Tex rate is 10%");
}
};
const anish = {
    salary: 5000,
};
anish.__proto__ = emp;
console.log(anish)

// CLASSES in JS;

class toyotaCar {
    constructor (brand , mileage){
        this.brand = brand;
        this.mileage = mileage;
    }
    Start() {
      console.log("start");
    }
    Stop() {
        console.log("Stop");
    }
}

let fortuner = new toyotaCar("Fortuner", 15);
fortuner.setBrand("fortuner");

// INHERITANCE :

class Car {
    constructor(color){
        this.color = color;
    }
    carnum (Number) {
        this.Number = Number
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
}

class marutiCar extends Car{

    constructor(colorPalate){
        super(colorPalate);
        this.colorPalate = colorPalate
    }
    numberPlate(NumberPlateType){
        this.NumberPlateType = NumberPlateType
    }
} 

let fortunerr = new marutiCar("Steel");
fortunerr.numberPlate("Steel")
fortunerr.carnum(9098);
console.log(fortunerr);



// PROJECT - 1:

class User {
    name(name){
      this.name = name
    }
    email(mail){
      this.mail = mail
    }
    viewData(){
        console.log("View Website Data")
    }
}

class Admin extends User {
    editData(){
        console.log("You can edit the data");
    }
}

let acro = new Admin;
acro.name("Anish Saini");
acro.email("anishsaini9098@gmail.com");
console.log(acro);

// ERROR - HANDLING

let a = 5;
let b = 6;

try{
    console.log(a+c)}
    catch(err){
        console.log(err);
    }

