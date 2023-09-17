//const add = (a, b) => a+b;

//const add = (a, b) => { return a +b }

//console.log(add(5, 6));

//const square = a => a * a;

//console.log(square(5));

//const square = (a) => a * a;

//console.log(square(5));

//const hello = () => console.log("Hello Me!");

//hello();

//const helloSpecific = userName => console.log("Hello " + userName + "!");
//helloSpecific("Portia");

/*
const helloFullName = (firstName, lastName) => {
console.log("Hello " + firstName + " " + lastName);
console.log("You are awesome!");

};
helloFullName("Tyler", "Korth");
*/
/* not ok to change a constant
const myName = "portia";
myName = "Sally"; */

//const myFunct = () => console.log("hey, you");

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}

window.onload = () => {
    document.getElementById("button-show-name").onclick = displayName;
}