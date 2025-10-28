let drink1 = "Osmanthus Oolong Milk Tea";
let drink2 = "Jasmine Green Milk Tea";
let drink3 = "Rock Oolong Milk Tea";
let drink4 = "Dark Milk Tea";

let drinks = [drink1, drink2, drink3, drink4];
let listmenu = "";
    for (let drink of drinks) {
      listmenu += "<li>" + drink + "</li>";
    }

document.getElementById("output").textContent = "Hi! Welcome to Chahalo! \n Here is our menu:\n";
document.getElementById("menu").innerHTML = listmenu;

setTimeout(function() {
    document.getElementById("askorder").textContent = "What would you like to order?";
    }, 5000);

document.getElementById("userInput").value

