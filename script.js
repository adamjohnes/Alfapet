//Javascript file for Alfapet Liner Calculator
//Developed by Adam Johnes

document.getElementById("myBtn").onclick = checkValues;
document.getElementById("reset").onclick = resetValues;

function checkValues(){

    length = +document.getElementById("length").value;
    width = +document.getElementById("width").value;
    front = +document.getElementById("front").value;
    left = +document.getElementById("left").value;
    back = +document.getElementById("back").value;
    right = +document.getElementById("right").value;
    lengthError = document.getElementById("lengthError");
    widthError = document.getElementById("widthError");
    frontError = document.getElementById("frontError");
    leftError = document.getElementById("leftError");
    backError = document.getElementById("backError");
    rightError = document.getElementById("rightError");
    output = document.getElementById("output");
    large = document.getElementById("large");
    largeLink = document.getElementById("largeLink");
    largeText = document.getElementById("largeText");
    extraGiant = document.getElementById("extraGiant");
    extraGiantLink = document.getElementById("extraGiantLink");
    extraGiantText = document.getElementById("extraGiantText");
    flatBottom = document.getElementById("flatBottom");
    flatBottomLink = document.getElementById("flatBottomLink");
    flatBottomText = document.getElementById("flatBottomText");
    jumbo = document.getElementById("jumbo");
    jumboLink = document.getElementById("jumboLink");
    jumboText = document.getElementById("jumboText");
    sifting = document.getElementById("sifting");
    siftingLink = document.getElementById("siftingLink");
    siftingText = document.getElementById("siftingText");
    superJumbo = document.getElementById("superJumbo");
    superJumboLink = document.getElementById("superJumboLink");
    superJumboText = document.getElementById("superJumboText");

    if (length < 0 || length == 0 || isNaN(length) || width < 0 || width == 0 || isNaN(width) || front < 0 || front == 0 || isNaN(front) || left < 0 || left == 0 || isNaN(left) || back < 0 || back == 0 || isNaN(back) || right < 0 || right == 0 || isNaN(right)){
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
        } if (front < 0 || isNaN(front)){
            frontError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (front == 0){
            frontError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            frontError.innerHTML = "";
        } if (left < 0 || isNaN(left)){
            leftError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (left == 0){
            leftError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            leftError.innerHTML = "";
        } if (back < 0 || isNaN(back)){
            backError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (back == 0){
            backError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            backError.innerHTML = "";
        } if (right < 0 || isNaN(right)){
            rightError.innerHTML = "Enter a positive number.";
            output.innerHTML = "";
        } else if (right == 0){
            rightError.innerHTML = "Must be larger than zero.";
            output.innerHTML = "";
        } else{
            rightError.innerHTML = "";
        }
    }else{
        lengthError.innerHTML = "";
        widthError.innerHTML = "";
        frontError.innerHTML = "";
        leftError.innerHTML = "";
        backError.innerHTML = "";
        rightError.innerHTML = "";
        x = length + front + back;
        y = width + left + right;
        if (length < 6 || width < 6 || front < 2 || left < 2 || right < 2 || back < 2){
            output.innerHTML = "Atleast one of your sides are too small for our liners."
            output.style.color = "black";
        }   else if (x <= 31 && y <= 34){
            output.innerHTML = "The correct size is Large.<br> Click on the pictures below to be taken to our Amazon store page!";
            output.style.color = "rgb(95, 63, 63)";
            if (length == 0 || width == 0 || front == 0 || left == 0 || back == 0 || right == 0){
                output.innerHTML = "";
            }
        } else if (x <= 37 && y <= 36){
            output.innerHTML = "The correct size is<br> Extra Giant or Jumbo.<br>Click on the pictures below to be taken to our Amazon store page!";
            output.style.color =  "rgb(21, 39, 56)";
        } else if (x <= 42 && y <= 40.5){
            output.innerHTML = "The correct size is Super Jumbo.<br> Click on the pictures below to be taken to our Amazon store page!";
            output.style.color = "darkgreen";
        } else if (length > 27){
            output.innerHTML = "Your length is too large for any for our liners."
            output.style.color = "black";
        } else if (width > 26){
            output.innerHTML = "Your width is too large for any for our liners."
            output.style.color = "black";
        } else if (front > 12){
            output.innerHTML = "Your front side is too large for any for our liners."
            output.style.color = "black";
        } else if (left > 12){
            output.innerHTML = "Your left side is too large for any for our liners."
            output.style.color = "black";
        } else if (back > 12){
            output.innerHTML = "Your back side is too large for any for our liners."
            output.style.color = "black";
        } else if (right > 12){
            output.innerHTML = "Your right side is too large for any for our liners."
            output.style.color = "black";
        }
    }
}

function resetValues(){
    document.getElementById("length").value = null;
    document.getElementById("width").value = null;
    document.getElementById("front").value = null;
    document.getElementById("left").value = null;
    document.getElementById("back").value = null;
    document.getElementById("right").value = null;
    document.getElementById("lengthError").innerHTML = "";
    document.getElementById("widthError").innerHTML = "";
    document.getElementById("frontError").innerHTML = "";
    document.getElementById("leftError").innerHTML = "";
    document.getElementById("backError").innerHTML = "";
    document.getElementById("rightError").innerHTML = "";
    output = document.getElementById("output").innerHTML = "";
}