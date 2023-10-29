document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const loginCard = document.getElementById('loginCard');
    const loginButton = document.getElementById('login');
    const headerButton = document.getElementById('headerButton');
    const usernameInput = document.getElementById('usernameInput');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const logoutPopup = document.getElementById('logoutPopup');
    const closeLogoutPopupButton = document.getElementById('closeLogoutPopup');
  
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    // Function to open the login popup
    function openLoginPopup() {
      overlay.style.display = 'block';
      loginCard.style.display = 'block';
    }
  
    // Show login popup by default if not logged in
    if (!isLoggedIn) {
      openLoginPopup();
    } else {
      headerButton.textContent = 'Logout';
      usernameDisplay.textContent = localStorage.getItem('username');
    }
  
    // Handle form submission and closing the login popup
    loginButton.addEventListener('click', function () {
      const username = usernameInput.value;
  
      if (username) {
        headerButton.textContent = 'Logout';
        usernameDisplay.textContent = username;
  
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
  
        overlay.style.display = 'none';
        loginCard.style.display = 'none';
      }
    });
  
    // Handle logout and show "Logout Successful" popup
    headerButton.addEventListener('click', function () {
      if (isLoggedIn) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        headerButton.textContent = 'Login';
        usernameDisplay.textContent = '';
  
        // Show the "Logout Successful" popup
        overlay.style.display = 'block';
        logoutPopup.style.display = 'block';
      } else {
        openLoginPopup();
      }
    });
  
    // Close the "Logout Successful" popup
    closeLogoutPopupButton.addEventListener('click', function () {
      overlay.style.display = 'none';
      logoutPopup.style.display = 'none';
    });
  });
  