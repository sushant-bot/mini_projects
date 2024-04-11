// Check if user is logged in
var isLoggedIn = false; // Assume user is not logged in

// Function to check login status
function checkLoginStatus() {
  if (isLoggedIn) {
    // User is logged in
    document.querySelector('nav ul').innerHTML += '<li><a href="#">Profile</a></li><li><a href="#">Logout</a></li>';
  } else {
    // User is not logged in
    document.querySelector('nav ul').innerHTML += '<li><a href="login.html">Login</a></li>';
  }
}

// Call the function to check login status
checkLoginStatus();
