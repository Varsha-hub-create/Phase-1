const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Nandhu', email: 'nandhu@gmail.com' },
  { id: 2, name: 'Varsha', email: 'varsha@gmail.com' },
  { id: 3, name: 'Dhakshi', email: 'dhakshi@gmail.com' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
