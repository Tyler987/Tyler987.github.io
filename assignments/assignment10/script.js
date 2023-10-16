//class for toys
class Toy {
    //constructor
    constructor(name, description, imageFileName) {
        this.name = name;
        this.description = description;
        this.imageFileName = imageFileName;
    }
//gets details for each toy
    get details() {
        return `${this.name}: ${this.description}`;
    }
//creates element for the toys item
    getToyItem() {
        const toyItem = document.createElement("div");
        toyItem.classList.add("toy");

        const toyContainer = document.createElement("div");
        toyContainer.classList.add("toy-container");
        toyItem.appendChild(toyContainer);

        const toyImage = document.createElement("div");
        toyImage.style.backgroundImage = `url(${this.imageFileName})`;
        toyImage.classList.add("toy-image");
        toyContainer.appendChild(toyImage);

        const toyDetails = document.createElement("div");
        toyDetails.classList.add("toy-details");
        toyDetails.textContent = this.details;
        toyContainer.appendChild(toyDetails);
//listens for the mouse so it can toggle and fade
        toyImage.addEventListener("mouseenter", () => {
            toyImage.classList.add("faded");
        });

        toyImage.addEventListener("mouseleave", () => {
            toyImage.classList.remove("faded");
        });

        return toyItem;
    }
}
//displays toys
const showToys = () => {
    const toyList = document.getElementById("toy-list");
    const toys = [];
//toys and pushes them
    toys.push(new Toy("Toy 1", "A fun and colorful toy", "toytruck2.png"));
    toys.push(new Toy("Toy 2", "A fun dino", "toydino.jpg"));
    toys.push(new Toy("Toy 3", "Buzzlight year to the rescue", "toybuzzlight.jpg"));
    toys.push(new Toy("Toy 4", "POV: what I code on", "toycomputer.jpg"));
    toys.push(new Toy("Toy 5", "Lots of drawing", "toydrawing.jpg"));
    toys.push(new Toy("Toy 6", "Mr. Potato Man", "toypotato.jpg"));
    toys.forEach(toy => {
        toyList.appendChild(toy.getToyItem());
    });
};

window.onload = () => {
    showToys();
};
//have a great day!