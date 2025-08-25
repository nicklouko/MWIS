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
app.post('/register', (req, res) => {
    const{ email, username, password} =req.body;
    db.execute('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, password])
      .then(() => console.log('User registered:', email))
      .catch(err => {
        console.error('Error registering user:', err);
        return res.status(500).send({ message: 'Error registering user' });
      });

    res.status(201).send({ message: 'User registered successfully', user: { email, username } });
});

// Login route
app.post('/login', (req, res) => {
    const{ email, password} =req.body;
    
    res.status(200).send({ message: 'Login successful', user: { email } });

});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:"  ${port}`)
});