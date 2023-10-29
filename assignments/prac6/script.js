document.addEventListener("DOMContentLoaded", function () {
    // JSON data
    const classesData = {
      "workout_classes": [
        // Your JSON data here...
      ]
    };
  
    // Get the class container
    const classContainer = document.getElementById("class-container");
  
    // Loop through the classes and create HTML elements for each
    classesData.workout_classes.forEach((workoutClass) => {
      const classCard = document.createElement("div");
      classCard.classList.add("class-card"); // You should define the CSS class for class cards in your styles.css.
  
      // Create HTML structure for the class card
      classCard.innerHTML = `
        <h2>${workoutClass["Class Name"]}</h2>
        <p>Class Type: ${workoutClass["Class Type"]}</p>
        <p>Experience Level: ${workoutClass["Experience Level"]}</p>
        <p>Exercise Type: ${workoutClass["Exercise Type"]}</p>
        <p>Days Available: ${workoutClass["Days Available"].join(", ")}</p>
        <p>Times Available: ${workoutClass["Times Available"].join(", ")}</p>
        <p>Description: ${workoutClass["Description"]}</p>
        <img src="${workoutClass["Image"]}" alt="${workoutClass["Class Name"]}" />
      `;
  
      // Append the class card to the class container
      classContainer.appendChild(classCard);
    });
  });