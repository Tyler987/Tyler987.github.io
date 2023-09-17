const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi, Tyler";
    helloP.classList.add("special");

}


const showDog = () => {
    document.getElementById("dog").classList.remove("hide");
}
const hideDog = () => {
    document.getElementById("dog").classList.add("hide");

}
window.onload = () => {
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showDog;
    document.getElementById("button-hide").onclick = hideDog;


}
/*
window.onload = () => {
    const clickButton = document.getElementById("button-click");
    clickButton.onclick = changeText;
    

}
*/
/*
window.onload = () => {
    document.getElementById("button-click").onclick = () => {
        const helloP = document.getElementById("date");
        helloP.innerHTML = "hi";
    }
}
*/


