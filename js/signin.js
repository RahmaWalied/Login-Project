function signIn() {
  const signinEmail = document.getElementById('signinEmail').value.trim();
  const signinPassword = document.getElementById('signinPassword').value.trim();
  const message = document.getElementById('message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  message.textContent = "";

  if (!signinEmail || !signinPassword) {
    message.textContent = "Please fill in all fields!";
    message.style.color = "red";
    return;
  }

  if (!emailRegex.test(signinEmail)) {
    message.textContent = "Invalid email format!";
    message.style.color = "red";
    return;
  }

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  if (signinEmail === storedEmail && signinPassword === storedPassword) {
    message.textContent = "Sign in success!";
    message.style.color = "green";
    localStorage.setItem('isLoggedIn', 'true');
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 500);
  } else {
    message.textContent = "Incorrect email or password";
    message.style.color = "red";
  }
}
