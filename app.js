const express = require('express');
const app = express();
const port=3000;

//middleware
app.use(express.urlencoded({ extended: true })); // for forms
app.use(express.json());    
//app.use(express.static('public')); //changed form action link instead of using this, keeping it just in case


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

    /*   db.execute('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, password])
      .then(() => console.log('User registered:', email))
      .catch(err => {
        console.error('Error registering user:', err);
        return res.status(500).send({ message: 'Error registering user' });
      });

    res.status(201).send({ message: 'User registered successfully', user: { email, username } });
});*/

    
 

// Login route
app.post('/login', (req, res) => {
    const{ email, password} =req.body;
    
    res.status(200).send({ message: 'Login successful', user: { email } });

});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:"  ${port}`)
});