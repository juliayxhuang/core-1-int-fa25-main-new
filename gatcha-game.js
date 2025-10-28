let boxes = ["1", "2", "3", "4"];
let randombox = boxes[Math.floor(Math.random() * boxes.length)]; 

//like print in python
console.log(randombox);


document.getElementById("result").textContent = "You pulled: " + randombox + "!";

