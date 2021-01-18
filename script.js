//Javascript file for Alfapet Liner Calculator
//Developed by Adam Johnes

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

    if (length < 0 || length == 0 || isNaN(length) || width < 0 || width == 0 || isNaN(width) || lengthFront < 0 || lengthFront == 0 || isNaN(lengthFront) || widthFront < 0 || widthFront == 0 || isNaN(widthFront) || lengthBack < 0 || lengthBack == 0 || isNaN(lengthBack) || widthBack < 0 || widthBack == 0 || isNaN(widthBack)){
        if (length < 0 || isNaN(length)){
            lengthError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (length == 0){
            lengthError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            lengthError.innerHTML = "";
        } if (width < 0 || isNaN(width)){
            widthError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (width == 0){
            widthError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            widthError.innerHTML = "";
        } if (lengthFront < 0 || isNaN(lengthFront)){
            lengthFrontError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (lengthFront == 0){
            lengthFrontError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            lengthFrontError.innerHTML = "";
        } if (widthFront < 0 || isNaN(widthFront)){
            widthFrontError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (widthFront == 0){
            widthFrontError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            widthFrontError.innerHTML = "";
        } if (lengthBack < 0 || isNaN(lengthBack)){
            lengthBackError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (lengthBack == 0){
            lengthBackError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            lengthBackError.innerHTML = "";
        } if (widthBack < 0 || isNaN(widthBack)){
            widthBackError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (widthBack == 0){
            widthBackError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            widthBackError.innerHTML = "";
        }
    }else{
        document.getElementById("lengthError").innerHTML = "";
        document.getElementById("widthError").innerHTML = "";
        document.getElementById("lengthFrontError").innerHTML = "";
        document.getElementById("widthFrontError").innerHTML = "";
        document.getElementById("lengthBackError").innerHTML = "";
        document.getElementById("widthBackError").innerHTML = "";
        x = length + lengthFront + lengthBack;
        y = width + widthFront + widthBack;
        if ((x <= 31 && y <= 34) && (length <= 20 && width <= 20 && lengthFront <= 8 && widthFront <= 8 && lengthBack <= 8 && widthBack <= 8)){
            output.innerHTML = "The correct size is Large.<br> Click on the picture below to be taken to our Amazon store page!";
            output.style.color = "purple";
            if (length == 0 || width == 0 || lengthFront == 0 || widthFront == 0 || lengthBack == 0 || widthBack == 0){
                output.innerHTML = "";
            }
        } else if ((x <= 37 && y <= 36) && (length <= 24 && width <= 24 && lengthFront <= 10 && widthFront <= 10 && lengthBack <= 10 && widthBack <= 10)){
            output.innerHTML = "The correct size is Extra Giant.<br> Click on the picture below to be taken to our Amazon store page!";
            output.style.color = "rgb(94, 19, 31)";
        } else if ((x <= 42 && y <= 40.5) && (length <= 27 && width <= 26 && lengthFront <= 12 && widthFront <= 12 && lengthBack <= 12 && widthBack <= 12)){
            output.innerHTML = "The correct size is Super Jumbo.<br> Click on the picture below to be taken to our Amazon store page!";
            output.style.color = "darkgreen";
        } else if (length > 27){
            output.innerHTML = "Your length is too large for any for our liners."
        } else if (width > 26){
            output.innerHTML = "Your width is too large for any for our liners."
        } else if (lengthFront > 12){
            output.innerHTML = "Your front side is too large for any for our liners."
        } else if (widthFront > 12){
            output.innerHTML = "Your left side is too large for any for our liners."
        } else if (lengthBack > 12){
            output.innerHTML = "Your back side is too large for any for our liners."
        } else if (widthBack > 12){
            output.innerHTML = "Your right side is too large for any for our liners."
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
    document.getElementById("lengthError").innerHTML = "";
    document.getElementById("widthError").innerHTML = "";
    document.getElementById("lengthFrontError").innerHTML = "";
    document.getElementById("widthFrontError").innerHTML = "";
    document.getElementById("lengthBackError").innerHTML = "";
    document.getElementById("widthBackError").innerHTML = "";
    output = document.getElementById("output").innerHTML = "";
}