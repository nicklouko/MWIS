<!DOCTYPE html>
<html lang="en">
<head>
  <title>Login Page</title>
  <link rel="stylesheet" href="login.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="footer.css">
</head>
<body>
  <?php include 'navigationbar.php'; ?>
  <main>
  <div class="logincontainer">
    <h2>Login</h2>
    <form id="loginForm">
      <label for="email">Email</label><br>
      <input type="email" id="email" name="email" placeholder="Email" required>
      <br>
      <label for="password">Password</label><br>
      <input type="password" id="password" name="password" placeholder="Password" required>

      <button type="submit">Login</button>
    </form>
    <p class="register-link">No account? <a href="register.php">Register</a></p>
  </div>
</main>
<?php include 'footer.php'; ?>
<script src="hambmenu.js"></script>
<script src="login.js"></script>
</body>
</html>
