const showDog = () => {
    document.getElementById("dog").classList.remove("hide");
}
const hideDog = () => {
    document.getElementById("dog").classList.add("hide");

}
const bounceBall = () => {
    let ballElement = document.getElementById("ball");
    ballElement.classList.add("bounce");
};
const stopBounce = () => {
    let ballElement = document.getElementById("ball");
    ballElement.classList.remove("bounce");
};
//constant for the messagees
//const writeMessage = () => {
 //   const firstName = document.getElementById("txt-first-name").value;
 //   const messageP = document.getElementById("message");

  //  messageP.innerHTML = "Hello " + firstName;
//};
    const addComment = () => {
        const productInput = document.getElementById("text-product").value;
        const commentInput = document.getElementById("text-comment").value;
        const ratingInput = document.getElementById("text-rating").value;
        const userNameInput = document.getElementById("text-user-name").value;
        for (let i = 1; i <= 4; i++) {
            const messageP = document.getElementById("message" + i);
            if (messageP.innerHTML === "") {
                messageP.innerHTML = `Product: ${productInput}<br>Comment: ${commentInput}<br>Rating: ${ratingInput} /10<br>User Name: ${userNameInput}`;
                break;
            }
        }
    }

//const showAn = () => {
    //document.getElementById("ball").classList.remove("hidean");
    // Start the animation when showing
    //document.getElementById("ball").style.animationPlayState = "running";
//}

//const hideAn = () => {
    //document.getElementById("ball").classList.add("hidean");
    // Pause the animation when hiding
    //document.getElementById("ball").style.animationPlayState = "paused";
//}

window.onload = () => {
    document.getElementById("button-show").onclick = showDog;
    document.getElementById("button-hide").onclick = hideDog;

    document.getElementById("bounce-button").onclick = bounceBall;
    document.getElementById("stop-bounce-button").onclick = stopBounce;
    //document.getElementById("button-showan").onclick = showAn;
    //document.getElementById("button-hidean").onclick = hideAn;

   // document.getElementById("message-button").onclick = writeMessage; //message on load
    document.getElementById("add-comment-button").onclick = addComment; //message on load

};