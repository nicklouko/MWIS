form = document.querySelector('form')   
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  email = form.email.value;
  username = form.username.value;
  password = form.password.value;

  try {
    const response = await fetch('http://localhost:3000/register', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, username, password })
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      window.location.href = 'login.php'; 
    } else {
      alert(result.message);
    }
  }
   catch (error) {
    console.error('Error during registration:', error);
    alert('An error occurred. Is the backend server running?'); 
   }
});