document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const loginButton = document.getElementById('loginButton');
    const closeButton = document.getElementById('closeButton');
    const signupSubmit = document.getElementById('signupSubmit');
    const logoutButton = document.getElementById('logoutButton');
    const usernameInput = document.getElementById('username');
    const loginForm = document.getElementById('loginForm');
    const successLogoutOverlay = document.getElementById('successLogoutOverlay');
    const successLogoutCloseButton = document.getElementById('successLogoutCloseButton');
  
    function showPopup() {
      overlay.style.display = 'block';
    }
  
    function hidePopup() {
      overlay.style.display = 'none';
      usernameInput.value = '';
  
    function handleSignup() {
      const username = usernameInput.value;
      if (username) {
        localStorage.setItem('username', username);
        loginButton.innerText = 'Logout ' + username;
        hidePopup();
      } else {
        alert('Please enter a valid username.');
      }
    }
  
    function handleLogout() {
      localStorage.removeItem('username');
      loginButton.innerText = 'Login';
    }
  
    function showSuccessLogoutPopup() {
      successLogoutOverlay.style.display = 'block';
    }
  
    function hideSuccessLogoutPopup() {
      successLogoutOverlay.style.display = 'none';
    }
  
    loginButton.addEventListener('click', function () {
      if (loginButton.innerText === 'Login') {
        showPopup();
      } else {
        handleLogout();
        showSuccessLogoutPopup();
      }
    });
  
    closeButton.addEventListener('click', hidePopup);
    signupSubmit.addEventListener('click', handleSignup);
  
    successLogoutCloseButton.addEventListener('click', hideSuccessLogoutPopup);
  
    // Check if a username is stored in local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      loginButton.innerText = 'Logout ' + storedUsername;
    }
  }});
  