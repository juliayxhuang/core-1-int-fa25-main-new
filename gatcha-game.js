let hironoMonsters = ["Grim Reaper", "Vampire", "Creepy Clown", "Zombie", "Killer Bunny", "Doctor Beak", "The Disembodied"]
let monsterImages = {
  "Grim Reaper": "../images/teso-life-images/grimreaper.png",
  "Vampire": "../images/teso-life-images/vampire.png",
  "Creepy Clown": "../images/teso-life-images/clown.png",
  "Zombie": "../images/teso-life-images/zombie.png",
  "Killer Bunny": "../images/teso-life-images/killerbunny.png",
  "Doctor Beak": "../images/teso-life-images/doctorbeak.png",
  "The Disembodied": "../images/teso-life-images/disembodied.png"
};

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

const box = document.getElementById("boxImage");

  //On click
  document.getElementById("shakeBtn").addEventListener("click", () => {
    // Add shake animation
    box.classList.add("shake");

    // After animation finishes, do the pull
  setTimeout(() => {
    box.classList.remove("shake"); // reset for next shake
    
    // Weighted pulls
    let pulledItem = weightedPull(hironoMonsters, weights);
    document.getElementById("shakeResult").textContent = "You pulled: " + pulledItem;

    //Image pop up
    const img = document.getElementById("pullImage");
    img.src = monsterImages[pulledItem];
    img.style.display = "block";
  
    }, 600); // match Shake animation duration
  });