// let boxes = ["1", "2", "3", "4"];
// let randombox = boxes[Math.floor(Math.random() * boxes.length)]; 

// //like print in python
// console.log(randombox);


// document.getElementById("result").textContent = "You pulled: " + randombox + "!";

let hironoMonsters = ["Grim Reaper", "Vampire", "Creepy Clown", "Zombie", "Killer Bunny", "Doctor Beak", "The Disembodied"]

// Special rarity for "The Disembodied"
  const specialItem = "The Disembodied";
  const specialChance = 1/72; // chance for "The Disembodied"

  // Compute weights for each monster
  let weights = hironoMonsters.map(monster => {
    if (monster === specialItem) return specialChance;
    else return (1 - specialChance) / (hironoMonsters.length - 1);
  });

  function weightedPull(items, weights) {
    let total = weights.reduce((a, b) => a + b, 0);
    let random = Math.random() * total;

    for (let i = 0; i < items.length; i++) {
      if (random < weights[i]) {
        return items[i];
      }
      random -= weights[i];
    }
  }

  document.getElementById("shakeBtn").addEventListener("click", () => {
    let pulledItem = weightedPull(hironoMonsters, weights);
    document.getElementById("shakeResult").textContent = "You pulled: " + pulledItem;
  });