/* const moveSquare = () => {
    //document.getElementById("square").classList.toggle("move-square");

    const square = document.getElementById("square");
    const button = document.getElementById("button-move");

    //is it currently animating
    if(square.classList.contains("move-square")) {
        square.classList.remove("move-square");
        button.innerHTML = "start";
        } else {
        square.classList.add("move-square");
        button.innerHTML ="stop";
    }
}

window.onload = () => {
    document.getElementById("button-move").onclick = moveSquare;
}*/

const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-smal");
};
const displayData = () => {
    const resultDiv = document.getElementById("result");
    const firstName = document.getElementById("txt-first-name").value;
    const lastName = document.getElementById("txt-last-name").value;
    const age = parseInt(document.getElementById("txt-age").value);


    //resultDiv.innerHTML = `<section>${firstName} ${lastName} </section>`;

    const section = document.createElement("section");
    resultDiv.append(section);
    const h3 = document.createElement("h3");
    h3.textContent = `${firstName} ${lastName}`;
    section.append(h3);
    const p = document.createElement("p");
    p.textContent = `age: ${age}`;
    section.append(p);

};
window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;

    document.getElementById("button-show-data").onclick = displayData;
};