(function () {
  const usernameEl = document.getElementById('username');
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn || (!name && !email)) {
    window.location.replace('./signin.html');
    return;
  }

  const displayName = name && name.trim() !== ''
    ? capitalizeWords(name.trim())
    : (email ? email.split('@')[0] : 'User');

  usernameEl.textContent = `Welcome ${displayName}`;

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    window.location.href = "index.html";
  });

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, ch => ch.toUpperCase());
  }
})();
