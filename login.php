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
  <div class="login-box">
    <h2>Login</h2>
    <form action="/login" method="post">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>

      <button type="submit">Login</button>
    </form>
    <p class="register-link">No account? <a href="/register">Register</a></p>
  </div>
</main>
<?php include 'footer.php'; ?>
<script src="hambmenu.js"></script>
</body>
</html>
