//built in function that listens for the function to be called for
document.addEventListener("DOMContentLoaded", function () {
    const manImage = document.getElementById("man-image");
//starting position
//using the length of the webpage as a refernce as to where the stickman walks and runs
    let currentPosition = 0; 
    const halfwayPoint = window.innerWidth * 2 / 5;
    const finalPosition = 0; 
    const speed = 5;
    let isAnimating = false; 

//This function helps move the stickman towards the center of the webpage
//was having issues with movement originally, got the manImage style part from looking it up
    function moveToMiddle() {
        currentPosition += speed;
        manImage.style.left = currentPosition + "px";

        if (currentPosition < halfwayPoint) {
            requestAnimationFrame(moveToMiddle);
        } else {
// Animation finishes then stops for 3 seconds
            setTimeout(function () {
                walkBack();
            }, 3000);
        }
    }

//this functions moves the stickman to his finalpostion which is the original spot where he started
    function walkBack() {
        currentPosition -= speed;
        manImage.style.left = currentPosition + "px";

        if (currentPosition > finalPosition) {
            requestAnimationFrame(walkBack);
        } else {
//animation finished and is waiting to start again
            isAnimating = false;
            manImage.addEventListener("click", startAnimation);
        }
    }
//starts animation
    function startAnimation() {
        if (!isAnimating) {
            manImage.style.left = "0";
            manImage.removeEventListener("click", startAnimation);
            isAnimating = true;
            moveToMiddle();
        }
    }

//this allows the event listener to start the animation when the image is clicked.
    manImage.addEventListener("click", startAnimation);
});

let donatedAmount = 0;
const donationGoal = 100000;

const donate = () => {
    const donationInput = document.getElementById("txt-donation");
    const amount = parseFloat(donationInput.value);

    if (!isNaN(amount) && amount > 0) {
        donatedAmount += amount;

        if (donatedAmount >= donationGoal) {
            donatedAmount = donationGoal;
        }
        const percentage = (donatedAmount / donationGoal) * 100;
        const rectangleFill = document.getElementById("rectangle-fill");
        rectangleFill.style.height = percentage + "%";

        
    }
    donationInput.value = "";
};

  window.onload = () => {
    document.getElementById("button-show-data").onclick = displayData;
    document.getElementById("button-donation").onclick = colorSquare;


  }