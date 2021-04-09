async function getAuthenticated(username) {
  const response = await fetch('http://localhost:3000/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username })
  });
  const data = await response.json();
  if (data.token) {
    window.localStorage.setItem('auth_token', data.token);
    return console.log(data.token);
  }
  console.log(data.status);
}
