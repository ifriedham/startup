document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay');
  const loginButton = document.getElementById('loginButton');
  const closeButton = document.getElementById('closeButton');
  const signupSubmit = document.getElementById('signupSubmit');
  const logoutButton = document.getElementById('logoutButton'); // New
  const usernameInput = document.getElementById('username');
  const loginForm = document.getElementById('loginForm');
  const successLogoutOverlay = document.getElementById('successLogoutOverlay'); // New
  const successLogoutCloseButton = document.getElementById('successLogoutCloseButton'); // New

  // Function to show the popup
  function showPopup() {
    overlay.style.display = 'block';
  }

  // Function to hide the popup
  function hidePopup() {
    overlay.style.display = 'none';
    usernameInput.value = ''; // Clear the username input
  }

  // Function to handle signup
  function handleSignup() {
    const username = usernameInput.value;
    if (username) {
      // Store the username in local storage
      localStorage.setItem('username', username);
      // Change the login button to "Logout" and display the username
      loginButton.innerText = 'Logout ' + username;
      // Hide the popup
      hidePopup();
    } else {
      alert('Please enter a valid username.');
    }
  }

  // Function to handle logout
  function handleLogout() {
    // Remove the username from local storage
    localStorage.removeItem('username');
    // Reset the login button to "Login"
    loginButton.innerText = 'Login';
    // Show the popup
    //showPopup();
  }

  // Function to show the "successfully logged out" popup
  function showSuccessLogoutPopup() {
    successLogoutOverlay.style.display = 'block';
  }

  // Function to hide the "successfully logged out" popup
  function hideSuccessLogoutPopup() {
    successLogoutOverlay.style.display = 'none';
  }

  // Add event listeners
  loginButton.addEventListener('click', function () {
    if (loginButton.innerText === 'Login') {
      showPopup();
    } else {
      handleLogout();
      showSuccessLogoutPopup(); // Show "successfully logged out" popup
    }
  });

  closeButton.addEventListener('click', hidePopup);
  signupSubmit.addEventListener('click', handleSignup);

  // Event listener for the "Close" button in the "successfully logged out" popup
  successLogoutCloseButton.addEventListener('click', hideSuccessLogoutPopup);

  // Check if a username is stored in local storage
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    loginButton.innerText = 'Logout ' + storedUsername;
  }
});
