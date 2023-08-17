const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var isSignUpPage = container.classList.contains("right-panel-active");
    if (isSignUpPage) {
        var email = document.getElementById("email").value;
        if (email === "") {
            alert("Please enter your email");
            return false;
        }
    }
});

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();

    if (email === "") {
        alert("Email address is required");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (username === "") {
        alert("Please enter the username");
        return false;
    }

    if (password === "") {
        alert("Please enter your password");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 digits");
        return false;
    }

    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;

    if (age === "" || isNaN(age) || gender === "") {
        alert("Please fill in the Age and Gender fields");
        return false;
    }

    if (age < 14) {
        alert("You must be at least 14 years old to register");
        return false;
    }

    alert("Successfully signed up! Welcome to join us.");

    return false;
}



