function signUp() {
  const signupName = document.getElementById("signupName");
  const signupEmail = document.getElementById("signupEmail");
  const signupPassword = document.getElementById("signupPassword");
  const message = document.getElementById("message");

  // Reset message
  message.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;

  // Validation checks
  if (signupName.value.trim().length < 3) {
    message.textContent = "Name must be at least 3 characters!";
    message.style.color = "red";
    return;
  }

  if (!emailRegex.test(signupEmail.value.trim())) {
    message.textContent = "Please enter a valid email!";
    message.style.color = "red";
    return;
  }

  if (!passwordRegex.test(signupPassword.value.trim())) {
    message.textContent = "Password must be at least 6 characters and contain numbers!";
    message.style.color = "red";
    return;
  }

  // Save data in localStorage
  localStorage.setItem("name", signupName.value.trim());
  localStorage.setItem("email", signupEmail.value.trim());
  localStorage.setItem("password", signupPassword.value.trim());

  message.textContent = "Registration successful!";
  message.style.color = "green";

  setTimeout(() => {
   window.location.href = "index.html";
  }, 1000);
}
