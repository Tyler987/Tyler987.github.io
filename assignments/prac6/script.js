const getClasses = async () => {
    const url = "https://tyler987.github.io/assignments/prac6/class.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  const createClassCard = (workoutClass) => {
    const classCard = document.createElement("div");
    classCard.classList.add("class-card"); // Define the CSS class for class cards in your styles.css.
  
    const image = document.createElement("img");
    image.src = "https://tyler987.github.io/assignments/prac6/trainimg/" + workoutClass.Image;
    image.classList.add("class-image");
  
    const classDetails = document.createElement("div");
    classDetails.classList.add("class-details");
  
    const title = document.createElement("h2");
    title.textContent = workoutClass["Class Name"];
    classDetails.appendChild(title);
  
    const classType = document.createElement("p");
    classType.textContent = "Class Type: " + workoutClass["Class Type"];
    classDetails.appendChild(classType);
  
    const experienceLevel = document.createElement("p");
    experienceLevel.textContent = "Experience Level: " + workoutClass["Experience Level"];
    classDetails.appendChild(experienceLevel);
  
    const exerciseType = document.createElement("p");
    exerciseType.textContent = "Exercise Type: " + workoutClass["Exercise Type"];
    classDetails.appendChild(exerciseType);
  
    const daysAvailable = document.createElement("p");
    daysAvailable.textContent = "Days Available: " + workoutClass["Days Available"].join(", ");
    classDetails.appendChild(daysAvailable);
  
    const timesAvailable = document.createElement("p");
    timesAvailable.textContent = "Times Available: " + workoutClass["Times Available"].join(", ");
    classDetails.appendChild(timesAvailable);
  
    const description = document.createElement("p");
    description.textContent = "Description: " + workoutClass["Description"];
    classDetails.appendChild(description);
  
    classCard.appendChild(image);
    classCard.appendChild(classDetails);
  
    return classCard;
  };
  const showClasses = async () => {
    let classes = await getClasses();
    let classContainer = document.getElementById("class-container");
  
    classes.workout_classes.forEach((workoutClass) => {
      const classCard = createClassCard(workoutClass);
      classContainer.appendChild(classCard);
    });
  };
  
  // Show the workout classes
  showClasses();