// function displayAlert(){
//     alert("This text is inside the function!");
// }

// displayAlert();


// function mbledhja(numri1,numri2){
//     return numri1+numri2;
// }

// document.write(mbledhja(5,8));

// function toCelsius(f){
//     return 5/9*(f-32);
// }

// console.log("5 faronhite is equal to "+toCelsius(5)+" celsius");


// var arrayFunction = () => alert("Helloo");

// arrayFunction();

// function dsFunction(){
//     var localVar = "DigitalSchool";
//     alert(localVar);
// }

// dsFunction();


// function toSeconds(m){
//     return m*60;
// }

// console.log(toSeconds(5));

var Car = {name:"Audi", color:"red", year:2012, vin:"www20456", licensePlate:"01-457-AG"};

alert(Car.licensePlate);

alert(Car['color']);


function Computer(name,CPU, RAM, GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var c1 = new Computer("Macbook", "8-core", "8GB", "5600M GPU");
var c2 = new Computer("Acer", "Inter core i7", "16GB", "Integrated");

