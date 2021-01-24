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
        }   else if ((x <= 31 && y <= 34) && (length <= 20 && width <= 20 && front <= 8 && left <= 8 && back <= 8 && right <= 8)){
            output.innerHTML = "The correct size is Large.<br> Click on the picture below to be taken to our Amazon store page!";
            extraGiant.style.visibility='hidden';
            extraGiantText.style.visibility='hidden';
            superJumbo.style.visibility='hidden';
            superJumboText.style.visibility='hidden';
            large.style.visibility='visible';
            largeText.style.visibility='visible';
            largeLink.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
            extraGiantLink.removeAttribute("href");
            superJumboLink.removeAttribute("href");
            output.style.color = "purple";
            if (length == 0 || width == 0 || front == 0 || left == 0 || back == 0 || right == 0){
                output.innerHTML = "";
            }
        } else if ((x <= 37 && y <= 36) && (length <= 24 && width <= 24 && front <= 10 && left <= 10 && back <= 10 && right <= 10)){
            output.innerHTML = "The correct size is Extra Giant.<br> Click on the picture below to be taken to our Amazon store page!";
            large.style.visibility='hidden';
            largeText.style.visibility='hidden';
            superJumbo.style.visibility='hidden';
            superJumboText.style.visibility='hidden';
            extraGiant.style.visibility='visible';
            extraGiantText.style.visibility='visible';
            extraGiantLink.href = "https://www.amazon.com/Alfapet-Extra-giant-Elastic-Sta-put-Litter/dp/B016095M6G/ref=sr_1_15?dchild=1&keywords=cat+pan+liners+alfapet&qid=1610991048&sr=8-15";
            superJumboLink.removeAttribute("href");
            largeLink.removeAttribute("href");
            output.style.color = "rgb(94, 19, 31)";
        } else if ((x <= 42 && y <= 40.5) && (length <= 27 && width <= 26 && front <= 12 && left <= 12 && back <= 12 && right <= 12)){
            output.innerHTML = "The correct size is Super Jumbo.<br> Click on the picture below to be taken to our Amazon store page!";
            large.style.visibility='hidden';
            largeText.style.visibility='hidden';
            extraGiant.style.visibility='hidden';
            extraGiantText.style.visibility='hidden';
            superJumbo.style.visibility='visible';
            superJumboText.style.visibility='visible';
            superJumboLink.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18"
            extraGiantLink.removeAttribute("href");
            largeLink.removeAttribute("href");
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

    large.style.visibility='visible';
    largeText.style.visibility='visible';
    extraGiant.style.visibility='visible';
    extraGiantText.style.visibility='visible';
    superJumbo.style.visibility='visible';
    superJumboText.style.visibility='visible';
    superJumboLink.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18"
    extraGiantLink.href = "https://www.amazon.com/Alfapet-Extra-giant-Elastic-Sta-put-Litter/dp/B016095M6G/ref=sr_1_15?dchild=1&keywords=cat+pan+liners+alfapet&qid=1610991048&sr=8-15";
    largeLink.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
}