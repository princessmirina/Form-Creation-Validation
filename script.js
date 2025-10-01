document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code goes here
  console.log("The DOM is fully loaded!");

  // Example: Change the text of a heading
  const heading = document.querySelector("h1");
  heading.textContent = "Hello, DOM is ready!";
});

const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");

//INPUT RETRIEVING AND TRIMMING
const userName = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

// Form submission

form.addEventListener(Submit, function (event) {
  event.preventDefault();
});

//VALIDATION LOGIC
//initialize validation variable
let isValid = true;
const message = [];

//username validation
if (userName.length < 3) {
  isValid = false;
  message.push("Username must be at least 3 character long");
}

//email validation
if (!email.includes("@") || !email.includes(".")) {
  isValid = false;
  message.push("Please enter a valid email address");
}

//password validation
if (password.length < 8) {
  isValid = false;
  message.push("Password must be at least 8 characters long");
}

//displaying feedback
feedbackDiv.style.display = block;
if ((isValid = "true")) {
  feedbackDiv.textContent = "Registration successful!";
  feedbackDiv.style.color = "#28a745";
} else if ((isValid = "false")) {
  feedbackDiv.innerHTML = message.join("<br>");
  feedbackDiv.style.color = "#dec3545";
} else {
  console.log("The feedbackDiv is neither true or false!");
}
