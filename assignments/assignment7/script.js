//hamburgers are good, cant go wrong with a hamburger
const toggleNav = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

//shows or hides the example 1 and example 2
const showExample1 = () => {
  document.getElementById("ex1").style.display = "block";
  document.getElementById("ex2").style.display = "none";

  // Add the selected class to Example 1 button and remove it from Example 2 button
  document.getElementById("button-example1").classList.add("selected");
  document.getElementById("button-example2").classList.remove("selected");
};

const showExample2 = () => {
  document.getElementById("ex1").style.display = "none";
  document.getElementById("ex2").style.display = "block";

  // Add the selected class to Example 2 button and remove it from Example 1 button
  document.getElementById("button-example2").classList.add("selected");
  document.getElementById("button-example1").classList.remove("selected");
};

//function for names and ages and organizing them from oldest to youngest
const displayData = () => {
  const resultDiv = document.getElementById("result");

//grabs the values
  const name1 = document.getElementById("txt-name1").value.trim();
  const age1 = parseInt(document.getElementById("txt-age1").value);
  const name2 = document.getElementById("txt-name2").value.trim();
  const age2 = parseInt(document.getElementById("txt-age2").value);
  const name3 = document.getElementById("txt-name3").value.trim();
  const age3 = parseInt(document.getElementById("txt-age3").value);

  const section = document.createElement("section");
  resultDiv.innerHTML = ""; // Clear previous results
  resultDiv.append(section);

//chckes ages
  if (
    isNaN(age1) ||
    isNaN(age2) ||
    isNaN(age3) ||
    age1 < 0 ||
    age2 < 0 ||
    age3 < 0
  ) {
    const error = document.createElement("p");
    error.textContent =
      "Please enter valid positive ages for all names, and only use letters for names.";
    section.append(error);
    return;
  }

//checks if numbers are in names
  if (!isNaN(name1) || !isNaN(name2) || !isNaN(name3)) {
    const error = document.createElement("p");
    error.textContent =
      "Please enter valid names using only letters for all names.";
    section.append(error);
    return;
  }

//array to store data
  const names = [name1, name2, name3];
  const ages = [age1, age2, age3];

//oldest and youngest ages
  const maxAgeIndex = ages.indexOf(Math.max(...ages));
  const minAgeIndex = ages.indexOf(Math.min(...ages));

//finds age between oldest and youngest
  let middleAgeIndex = 0;
  for (let i = 0; i < 3; i++) {
    if (i !== maxAgeIndex && i !== minAgeIndex) {
      middleAgeIndex = i;
      break;
    }
  }

//the good part, results
  const h3 = document.createElement("h3");
  h3.textContent = `Oldest: ${names[maxAgeIndex]}`;
  section.append(h3);

  const p = document.createElement("p");
  p.textContent = `Age: ${ages[maxAgeIndex]}`;
  section.append(p);

  const h3Middle = document.createElement("h3");
  h3Middle.textContent = `Middle: ${names[middleAgeIndex]}`;
  section.append(h3Middle);

  const pMiddle = document.createElement("p");
  pMiddle.textContent = `Age: ${ages[middleAgeIndex]}`;
  section.append(pMiddle);

  const h3Youngest = document.createElement("h3");
  h3Youngest.textContent = `Youngest: ${names[minAgeIndex]}`;
  section.append(h3Youngest);

  const pYoungest = document.createElement("p");
  pYoungest.textContent = `Age: ${ages[minAgeIndex]}`;
  section.append(pYoungest);
};
//amount donated function
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
//got this part from google, looks way nicer
        const percentage = (donatedAmount / donationGoal) * 100;
        const rectangleFill = document.getElementById("rectangle-fill");
        rectangleFill.style.height = percentage + "%";

        
    }
    donationInput.value = "";
};

  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-show-data").onclick = displayData;
    document.getElementById("button-donation").onclick = colorSquare;
    document.getElementById("showExample2").onclick = showExample2;
    document.getElementById("showExample1").onclick = showExample1;

  };
//have a nice day