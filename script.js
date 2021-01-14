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
document.getElementById("reset").onclick = resetValues;

function checkValues(){

    length = +document.getElementById("length").value;
    width = +document.getElementById("width").value;
    lengthFront = +document.getElementById("lengthFront").value;
    widthFront = +document.getElementById("widthFront").value;
    lengthBack = +document.getElementById("lengthBack").value;
    widthBack = +document.getElementById("widthBack").value;
    lengthError = document.getElementById("lengthError");
    widthError = document.getElementById("widthError");
    lengthFrontError = document.getElementById("lengthFrontError");
    widthFrontError = document.getElementById("widthFrontError");
    lengthBackError = document.getElementById("lengthBackError");
    widthBackError = document.getElementById("widthBackError");
    output = document.getElementById("output");
    buffer = 1;

    if (length < 0 || isNaN(length) || width < 0 || isNaN(width) || lengthFront < 0 || isNaN(lengthFront) || widthFront < 0 || isNaN(widthFront) || lengthBack < 0 || isNaN(lengthBack) || widthBack < 0 || isNaN(widthBack)){
        if (length < 0 || isNaN(length)){
            lengthError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (length == 0){
            lengthError.innerHTML = "Must be larger than zero.";
        } else{
            lengthError.innerHTML = "";
        } if (width < 0 || isNaN(width)){
            widthError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (width == 0){
            widthError.innerHTML = "Must be larger than zero.";
        } else{
            widthError.innerHTML = "";
        } if (lengthFront < 0 || isNaN(lengthFront)){
            lengthFrontError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (lengthFront == 0){
            lengthFrontError.innerHTML = "Must be larger than zero.";
        } else{
            lengthFrontError.innerHTML = "";
        } if (widthFront < 0 || isNaN(widthFront)){
            widthFrontError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (widthFront == 0){
            widthFrontError.innerHTML = "Must be larger than zero.";
        } else{
            widthFrontError.innerHTML = "";
        } if (lengthBack < 0 || isNaN(lengthBack)){
            lengthBackError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (lengthBack == 0){
            lengthBackError.innerHTML = "Must be larger than zero.";
        } else{
            lengthBackError.innerHTML = "";
        } if (widthBack < 0 || isNaN(widthBack)){
            widthBackError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (widthBack == 0){
            widthBackError.innerHTML = "Must be larger than zero.";
        } else{
            widthBackError.innerHTML = "";
        }
    }else{
        x = length + lengthFront + lengthBack;
        y = width + widthFront + widthBack;
        if ((x <= 31 && y <= 34) && (length <= 20 && width <= 20 && lengthFront <= 8 && widthFront <= 8 && lengthBack <= 8 && widthBack <= 8)){
            output.innerHTML = "191";
            if (length == 0 || width == 0 || lengthFront == 0 || widthFront == 0 || lengthBack == 0 || widthBack == 0){
                output.innerHTML = "";
            }
        } else if ((x <= 37 && y <= 36) && (length <= 24 && width <= 24 && lengthFront <= 10 && widthFront <= 10 && lengthBack <= 10 && widthBack <= 10)){
            output.innerHTML = "192";
        } else if ((x <= 42 && y <= 40.5) && (length <= 27 && width <= 26 && lengthFront <= 12 && widthFront <= 12 && lengthBack <= 12 && widthBack <= 12)){
            output.innerHTML = "178";
        } else{
            output.innerHTML = "One of your measurements is too large for our liners."
        }
    }
}

function resetValues(){
    document.getElementById("length").value = null;
    document.getElementById("width").value = null;
    document.getElementById("lengthFront").value = null;
    document.getElementById("widthFront").value = null;
    document.getElementById("lengthBack").value = null;
    document.getElementById("widthBack").value = null;
    document.getElementById("lengthError").value = null;
    document.getElementById("widthError").value = null;
    document.getElementById("lengthFrontError").value = null;
    document.getElementById("widthFrontError").value = null;
    document.getElementById("lengthBackError").value = null;
    document.getElementById("widthBackError").value = null;
    output = document.getElementById("output").innerHTML = "";
}