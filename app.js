const express = require('express');
const app = express();
const port=3000;

//middleware
app.use(express.urlencoded({ extended: true })); // for forms
app.use(express.json());    
const cors = require('cors');
app.use(cors({ origin: 'http://localhost', credentials: yees })); //  so I can serve the frontend that uses a different port



// creating MySQL connection pool
const mysql = require('mysql2/promise');
const db = mysql.createPool({   
  host: "localhost",
  user: "root",           
  password: "",           
  database: "dishify"  
});




// Registration route
app.post('/register', async (req, res) => {
  try{
    const { email, username, password } = req.body;

    //check if email already exists
    const [rowsEmail] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rowsEmail.length > 0) {
      return res.status(400).send({ message: 'Email already in use' });
    }
    // Check if user already exists
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length > 0) { 
      return res.status(400).send({ message: 'User already exists' });
    }
    // Insert new user
    await db.execute('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, password]);
    return res.status(201).json({
      message: 'User registered successfully',
      user: { email, username }
    });
  } catch (err) {
    console.error('Error registering user:', err);
    return res.status(500).send({ message: 'Error registering user' });
  }       });
   

// Login route
app.post('/login', async (req, res) => {
  try{
    const{ email, password} =req.body;
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    else{
      return res.status(200).json({ message: 'Login successful', user: { email } });  
    } 
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ message: 'Error during login' });
  }

});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:"  ${port}`)
});