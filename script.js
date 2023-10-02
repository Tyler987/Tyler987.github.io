



const highLightItems = () => {


let count = 1;

const interval = setInterval(() => {
    count++;
    console.log(count);

const currentSection = document.querySelector(`.itemssection:nth-child(1)`);
currentSection.classList.add("highlighted");


    if (count >10) {
        clearInterval(interval);
        
    }
}, 500);

}




window.onload = () => {

highLightItems();


};