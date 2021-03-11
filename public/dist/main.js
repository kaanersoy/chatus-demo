function login(e) {
  e.preventDefault();
  const username = document.getElementById('name');
  const sendBody = {
    username: username.value,
  };
  fetch('/auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendBody),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.redirect) {
        window.location.href = '/chat';
      }
    });
}
