document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const loginCard = document.getElementById('loginCard');
    const actionButton = document.getElementById('actionButton');
    const closeCardButton = document.getElementById('closeCard');
    const headerButton = document.getElementById('headerButton');
    const usernameInput = document.getElementById('usernameInput');
    const usernameDisplay = document.getElementById('usernameDisplay');
  
    function openPopup() {
      overlay.style.display = 'block';
      loginCard.style.display = 'block';
    }
  
    function closePopup() {
      overlay.style.display = 'none';
      loginCard.style.display = 'none';
    }
  
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    // Show popup by default
    if (!isLoggedIn) {
      openPopup();
    } else {
      headerButton.textContent = 'Logout';
      usernameDisplay.textContent = localStorage.getItem('username');
    }
  
    closeCardButton.addEventListener('click', closePopup);
  
    actionButton.addEventListener('click', function () {
      const username = usernameInput.value;
  
      if (username) {
        headerButton.textContent = 'Logout';
        usernameDisplay.textContent = username;
  
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
  
        closePopup();
      }
    });
  
    headerButton.addEventListener('click', function () {
      if (isLoggedIn) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        headerButton.textContent = 'Login';
        usernameDisplay.textContent = '';
      } else {
        openPopup();
      }
    });
  });
  