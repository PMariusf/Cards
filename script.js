

// Get the button and the paragraph element by their IDs
// Get the button and the card by ID
const button = document.getElementById("changeColorButton");
const card = document.getElementById("name-card");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");

// Array of random colors
const colors = ['#FF6347', '#FFD700', '#32CD32', '#8A2BE2', '#FF1493', '#1E90FF'];

// Add event listener to the button
button.addEventListener("click", function() {
    // Pick random colors for the front and back of the card
    const frontColor = colors[Math.floor(Math.random() * colors.length)];
    const backColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the background colors of the card's front and back
    cardFront.style.backgroundColor = frontColor;
    cardBack.style.backgroundColor = backColor;
});




//const button = document.getElementById("changeTextButton");
//const textElement = document.getElementById("myText");

// Add an event listener to the button that changes the text when clicked
//button.addEventListener("click", function() {
 //   textElement.textContent = "The text has been changed!";
//});


// Let's say you want to change the name and title when a button is clicked
//const button = document.getElementById("changeInfoButton");
//const nameElement = document.getElementById("card-name");
//const titleElement = document.getElementById("card-title");

//button.addEventListener("click", function() {
    // Change the text of name and title
  //  nameElement.textContent = "Jane Smith";
   // titleElement.textContent = "Software Engineer";
//});
