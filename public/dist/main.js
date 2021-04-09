function login(e) {
  e.preventDefault();
  const username = document.getElementById('name');
  getAuthenticated(username.value);
}
