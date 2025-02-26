document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');
    const loginForm = document.querySelector(".login form");

    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const username = document.querySelector(".login input[type='text']").value;
        const password = document.querySelector(".login input[type='password']").value;

        if (username === "admin" && password === "password") { 
            alert("Login Successful! Redirecting to homepage...");
            localStorage.setItem("isLoggedIn", "true"); 
            window.location.href = "ecommerce.html"; 
        } else {
            alert("Invalid Username or Password");
        }
    });

    // Check login status on page load
    if (localStorage.getItem("isLoggedIn") === "true") {
        console.log("User is already logged in");
    }
});
