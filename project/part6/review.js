const getReviews = async() => {
    try {
        return (await fetch("api/workouts/")).json();
    } catch (error) {
        console.log(error);
    }
};

const showReviews = async() => {
    let workouts = await getWorkouts();
    let workoutsDiv = document.getElementById("workout-list");
    workoutsDiv.innerHTML = "";
    workouts.forEach((workout) => {
        const section = document.createElement("section");
        section.classList.add("workout");
        workoutsDiv.append(section);

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = workout.name;
        a.append(h3);

        a.onclick = (e) => {
            e.preventDefault();
            displayDetails(workout);
        };
    });
};
const displayDetails = (workout) => {
    const workoutDetails = document.getElementById("workout-details");
    workoutDetails.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.innerHTML = workout.name;
    workoutDetails.append(h3);

    const dLink = document.createElement("a");
    dLink.innerHTML = "	&#x2715;";
    workoutDetails.append(dLink);
    dLink.id = "delete-link";

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    workoutDetails.append(eLink);
    eLink.id = "edit-link";

    const p = document.createElement("p");
    workoutDetails.append(p);
    p.innerHTML = workout.description;

    const ul = document.createElement("ul");
    workoutDetails.append(ul);
    console.log(workout.exercises);
    workout.exercises.forEach((exercise) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = exercise;
    });

    eLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("add-edit-title").innerHTML = "Edit Workout";
    };

    dLink.onclick = (e) => {
        e.preventDefault();
        deleteWorkout(workout);
    };

    populateEditForm(workout);
};