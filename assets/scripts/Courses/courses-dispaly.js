// Retrieve elements
const signupForm = document.querySelector("form");
const nameInput = signupForm.querySelector('input[type="text"]');
const emailInput = signupForm.querySelector('input[type="email"]');
const passwordInput = signupForm.querySelector('input[type="password"]');
const checkbox = signupForm.querySelector('input[type="checkbox"]');

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nameInput.value === "") {
    alert("Full name is required");
    return;
  }

  if (emailInput.value === "" || !validateEmail(emailInput.value)) {
    alert("Please enter a valid email address");
    return;
  }

  if (passwordInput.value === "" || passwordInput.value.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  if (!checkbox.checked) {
    alert("You must agree to the Terms & Conditions");
    return;
  }

  alert("Account successfully created!");
  signupForm.reset();
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
