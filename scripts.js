document.addEventListener("DOMContentLoaded", function() {
  // Event listener for flip buttons
  document.querySelectorAll('.flip-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent link default behavior
      btn.closest('.card').classList.toggle('flipped');
    });
  });

  // Event listener for sign up form submission
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var phone = document.getElementById("signup-phone").value;

    // Create user object
    var user = {
      email: email,
      password: password,
      phone: phone
    };

    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Alert signup success
    alert("Signed up successfully!");
  });

  // Event listener for login form submission
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    // Retrieve user data from local storage
    var storedUser = localStorage.getItem("user");

    // Check if user exists
    if (storedUser) {
      // Parse stored user data
      var user = JSON.parse(storedUser);
      
      // Check email and password
      if (email === user.email && password === user.password) {
        // Alert login success
        alert("Login successful!");
      } else {
        // Alert login failure
        alert("Incorrect email or password!");
      }
    } else {
      // Alert user not found
      alert("User not found. Please sign up!");
    }
  });
});
