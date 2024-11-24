document.addEventListener("DOMContentLoaded", function() {
  const card = document.getElementById("name-card");
  const cardName = document.getElementById("card-name");
  const cardTitle = document.getElementById("card-title");
  const cardBack = document.querySelector(".card-back");

  // Button to change the card color and text
  const changeButton = document.createElement("button");
  changeButton.innerText = "Change Info";
  document.body.appendChild(changeButton);

  // Function to change text and colors when the button is clicked
  changeButton.addEventListener("click", function() {
      // Change text
      cardName.innerText = "Jane Smith";
      cardTitle.innerText = "Software Engineer";
      
      // Change the background color and text color
      const colors = ['#FF6347', '#FFD700', '#32CD32', '#8A2BE2', '#FF1493'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      // Change front color
      card.querySelector(".card-front").style.backgroundColor = randomColor;

      // Change back color
      const randomBackColor = colors[Math.floor(Math.random() * colors.length)];
      card.querySelector(".card-back").style.backgroundColor = randomBackColor;
      
      // You can also change the text color dynamically:
      card.querySelector(".card-front").style.color = randomColor;
      card.querySelector(".card-back").style.color = randomBackColor;
  });
});