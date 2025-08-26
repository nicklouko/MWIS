<!DOCTYPE html>
<html lang="en">
<head>
  <title>Registration Page</title>
  <link rel="stylesheet" href="login.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="footer.css">
</head>
<body>
  <?php include 'navigationbar.php'; ?>
  <main>
  <div class="registercontainer">
    <h2>Registration Form</h2>
    <form id="registerForm">
      <label for="email">Email</label><br>
      <input type="email" id="email" name="email" placeholder="Email" required>
      <label for="username">Username</label><br>
      <input type="text" id="username" name="username" placeholder="Username" required>
      <br>
      <label for="password">Password</label><br>
      <input type="password" id="password" name="password" placeholder="Password" required>

      <button type="submit">Register</button>
    </form>
    <p class="login-link">Already have an account? <a href="login.php">Login</a></p>
  </div>
</main>
<?php include 'footer.php'; ?>
<script src="hambmenu.js"></script>
<Script src="register.js"></script>
</body>
</html>
