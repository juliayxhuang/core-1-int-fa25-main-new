let drinks = ["Osmanthus Oolong Milk Tea", "Jasmine Green Milk Tea", "Rock Oolong Milk Tea", "Dark Milk Tea"]
let drinksList = ["osmanthus oolong milk tea", "jasmine green milk tea", "rock oolong milk tea", "dark milk tea"]
let index = 0;

document.getElementById("welcomeOutput").textContent = "Hi! Welcome to Chahalo! \n Here is our menu:\n";

// print menu item by item
function printNext() {
  if (index < drinks.length) {
    document.getElementById("menu").innerHTML += drinks[index] + "<br>";
    index++;
    setTimeout(printNext, 500); // wait 
      }
    }
printNext();
document.getElementById("askorder").textContent = "What would you like to order?";

//taking the user's order
function getInput() {
  let orderInput = document.getElementById("userOrder").value.trim().toLowerCase();  
  let orderOutput = document.getElementById("orderOutput");

  if (orderInput === "") {
        orderOutput.textContent = "";
        return; // do nothing if input is empty
    }

  if (drinksList.includes(orderInput)) {
    runMultiStep(6000, steps, () => {
          document.getElementById("orderOutput").textContent = "Your " + orderInput + " is ready!";
        });
      }

  else {
    document.getElementById("orderOutput").textContent = "Sorry, we don't have that on the menu.";
    }
  }

//making the user's order (after input it taken)

//define steps w/ when they appear, their % points
const steps = [
  { percent: 0,  text: "Processing your order…" },
  { percent: 25, text: "Adding tea leaves…" },
  { percent: 50, text: "Preparing your drink…" },
  { percent: 80, text: "Finishing touches…" }
];

function runMultiStep(duration, steps, callback) {
  const container = document.getElementById("progressContainer");
  const bar = document.getElementById("progressBar");
  const msg = document.getElementById("stepMessage");

  container.style.display = "block";
  bar.style.width = "0%";
  msg.textContent = steps[0].text; //taking text at index from steps array

  let stepStartTime = null;
  let currentStep = 0;

  function animate(timestamp) {
    if (!stepStartTime) stepStartTime = timestamp;
    const elapsed = timestamp - stepStartTime;
    const progressPercent = Math.min((elapsed / duration) * 100, 100);
    
    bar.style.width = progressPercent + "%";

    // Step control: move to next step if threshold reached
    if (currentStep < steps.length - 1 && progressPercent >= steps[currentStep + 1].percent) {
      currentStep++;
      msg.textContent = steps[currentStep].text;
      }

    // Continue or finish
    if (progressPercent < 100) {
      requestAnimationFrame(animate);
      } 
    else {
      container.style.display = "none";
      msg.textContent = "";
      callback();
      }
    }

    requestAnimationFrame(animate);
    }

//lets user press enter on keyboard or use submit button
document.getElementById("userOrder").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getInput();
  }
});


