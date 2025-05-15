const express = require('express');
const path = require('path');
const app = express();

const isDev = process.env.NODE_ENV !== 'production';

app.use(express.json());

// Example API route that throws a manual error
app.get('/api/error', (req, res, next) => {
  const err = new Error('Manual API error!');
  err.status = 500;
  next(err);
});

// Example API route accessing a non-existent resource
app.get('/api/resource/:id', (req, res, next) => {
  const resource = null; // simulate not found
  if (!resource) {
    const err = new Error(`Resource with ID ${req.params.id} not found`);
    err.status = 404;
    next(err);
  }
});

// Example HTML route
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><p>Try /api/error or /notfound</p>');
});

// Example HTML route that throws an error
app.get('/crash', (req, res, next) => {
  throw new Error('This page crashed!');
});

// Custom 404 middleware
app.use((req, res, next) => {
  const err = new Error('Route Not Found');
  err.status = 404;
  next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // API route – return JSON
  if (req.path.startsWith('/api')) {
    return res.status(status).json({
      error: {
        message,
        ...(isDev && { stack: err.stack })
      }
    });
  }

  // HTML route – return rendered page
  const html = `
    <h1>Error ${status}</h1>
    <p>${message}</p>
    ${isDev ? `<pre>${err.stack}</pre>` : ''}
    <a href="/">Go back</a>
  `;
  res.status(status).send(html);
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
