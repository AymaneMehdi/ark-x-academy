const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
//const { body, validationResult } = require('express-validator');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
///////////////////////////////////////////////
const users = [
  { id: 1 , username: 'aymane' , password: '123456789' },
  { id: 2 , username: 'Mehdi' , password: '123456789' },
];
///////////////////////////////////////////////
app.post('/login', async (req, res) => {
  const input = () => {
    return new Promise((resolve, reject) => {
      rl.question('username : ', (usernameInput) => {
        rl.question('password : ', (passwordInput) => {
          resolve({ usernameInput, passwordInput });
        });
      });
    });
  };
    const { usernameInput, passwordInput } = await input();
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
    if (user) {
      // Successful authentication
      const token = jwt.sign({ user: user.id }, process.env.secretcode, { expiresIn: '2h' });
      res.status(200).json({ message: 'Authentication successful', token });
    } else {
      // Authentication failed
      res.status(401).json({ message: 'Authentication failed' });
    }
});
///////////////////////////////////////////////
app.listen(7000, () => {
  console.log('Server is running on port 7000');
});
///////////////////////////////////////////////
//npm install dotenv
//npm install jsonwebtoken