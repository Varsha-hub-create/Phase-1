const express = require('express');
const app = express();

// Custom middleware for logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${url}`);
  next(); 
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.get('/products', (req, res) => {
  res.send('Products Page');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
