// Function to generate one-time username and password
function generateAccount() {
    // Generate a random username and password
    var username = "user" + Math.floor(Math.random() * 10000);
    var password = Math.random().toString(36).slice(-8);

    // Store the username and password in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Populate the text boxes with the generated username and password
    document.getElementById("username").value = username;
    document.getElementById("password").value = password;
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the stored username and password from localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Add a click event listener to the login button
    var loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", function() {
        // Get the entered username and password
        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;

        // Check if the entered username and password match the stored username and password
        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            // Redirect to the welcome page if the login is successful
            window.location.href = "welcome.html";
        } else {
            // Show an error message if the login fails
            alert("Invalid username or password. Please try again.");
        }
    });
});

// Function to redirect to the login page
function redirectToLoginPage() {
    window.location.href = "login.html";
}

// Function to check if the login credentials are correct
function login() {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    const generatedUsername = document.getElementById("username").value;
    const generatedPassword = document.getElementById("password").value;

    if (loginUsername === generatedUsername && loginPassword === generatedPassword) {
        window.location.href = "welcome.html";
    } else {
        alert("Incorrect username or password.");
    }
}

// Function to logout and generate new username and password
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "index.html";
}

// Event listeners
document.getElementById("generate-btn").addEventListener("click", generateAccount);
document.getElementById("login-btn").addEventListener("click", redirectToLoginPage);
document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("logout-btn").addEventListener("click", logout);