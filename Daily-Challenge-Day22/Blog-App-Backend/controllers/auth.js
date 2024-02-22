const data = require("../models/data");

const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
exports.Login = async (req,res) => {
  const users = await data.readUsers();
  const input = () => {
    return new Promise((resolve, reject) => {
      rl.question('username : ', (usernameInput) => {
        rl.question('password : ', (passwordInput) => {
          resolve({ usernameInput, passwordInput });
        });
      });
    });
  }
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
};