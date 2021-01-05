//Javascript file for Alfapet Liner Calculator
//Developed by Adam Johnes

/* class LitterBox{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height; //highest side
    }
    getLength(){
        return this.length;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    getDimensions(){
        return String(this.length) + "x" + String(this.width) + "x" + String(this.height);
    }
    setLength(length){
        self.length = length;
    }
    setWidth(width){
        self.width = width;
    }
    setHeight(height){
        self.height = height;
    }
    setDimensions(length, width, height){
        self.length = length;
        self.width = width;
        self.height = height;
    }
}
class Liner{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    getLength(){
        return this.length;
    }
    getWidth(){
        return this.width;
    }
    getDimensions(){
        return String(this.length) + "x" + String(this.width);
    }
    setLength(length){
        this.length = length;
    }
    setWidth(width){
        this.width = width;
    }
    setDimensions(length, width){
        this.length = length;
        this.width = width;
    }
}
let reqMed = Liner(31, 17 * 2);
let XLJumbo = Liner(37, 18 * 2);
let superJumbo = Liner(40, 22 * 2); */

document.getElementById("myBtn").onclick = checkValues;

function checkValues(){

    length = +document.getElementById("length").value;
    width = +document.getElementById("width").value;
    height = +document.getElementById("height").value;
    
    buffer = 1;

    if (length < 0 || width < 0 || height < 0){
        if (length < 0 || isNaN(length)){
            document.getElementById("lengthError").innerHTML = "Enter a positive number.";
            document.getElementById("output").innerHTML = "";
        }else{
            document.getElementById("lengthError").innerHTML = "";
        }
        if (width < 0){
            document.getElementById("widthError").innerHTML = "Enter a positive number.";
            document.getElementById("output").innerHTML = "";
        }else{
            document.getElementById("widthError").innerHTML = "";
        }
        if (height < 0){
            document.getElementById("heightError").innerHTML = "Enter a positive number.";
            document.getElementById("output").innerHTML = "";
        }else{
            document.getElementById("heightError").innerHTML = ""; 
        }
    }else{
        document.getElementById("lengthError").innerHTML = "";
        document.getElementById("widthError").innerHTML = "";
        document.getElementById("heightError").innerHTML = "";

        userLength = length + (height * 2) + buffer;
        userWidth = width + (height * 2) + buffer;

        if (userLength < 24 || userWidth < 14){
            document.getElementById("output").innerHTML = "Too small of dimensions.";
        }else if (userLength <= 31 && userWidth <= 34){
            document.getElementById("output").innerHTML = "The correct liner size is Medium/Large.";
        }else if (userLength <= 37 && userWidth <= 36){
            document.getElementById("output").innerHTML = "The correct liner size is<br> XL Jumbo/Extra Giant.";
        }else if (userLength <= 40 && userWidth <= 44){
            document.getElementById("output").innerHTML = "The correct liner size is Super Jumbo.";
        }else if (userLength > 40 || userWidth > 44){     
            document.getElementById("output").innerHTML = "Atleast one of your sides are too big for our liners. Sorry."
        }else{
            document.getElementById("output").innerHTML = "Please check your values and enter a number."
        }
    }
}