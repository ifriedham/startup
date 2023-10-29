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
  
    function login() {
      const username = usernameInput.value;
      if (username) {
        headerButton.textContent = 'Logout';
        usernameDisplay.textContent = username;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        closePopup();
      }
    }
  
    function logout() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      headerButton.textContent = 'Login';
      usernameDisplay.textContent = '';
      openPopup(); // Show the "Successfully Logged Out" message.
    }
  
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    if (!isLoggedIn) {
      openPopup();
      actionButton.addEventListener('click', login);
    } else {
      headerButton.textContent = 'Logout';
      usernameDisplay.textContent = localStorage.getItem('username');
      actionButton.addEventListener('click', logout);
    }
  
    closeCardButton.addEventListener('click', closePopup);
  });
  