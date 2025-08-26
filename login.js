const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  try {
    const response = await fetch('http://localhost:3000/login', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      window.location.href = 'index.php';
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred. Is the backend server running?');
  }
});

