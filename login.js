document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const loginCard = document.getElementById("loginCard");
  const showCardButton = document.getElementById("showCard");
  const closeCardButton = document.getElementById("closeCard");

  // check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    // Show the overlay and login card by default
    overlay.style.display = "block";
    loginCard.style.display = "block";
  }

  showCardButton.addEventListener("click", function () {
    overlay.style.display = "block";
    loginCard.style.display = "block";
  });

  

  closeCardButton.addEventListener("click", function () {
    overlay.style.display = "none";
    loginCard.style.display = "none";
  });
});
