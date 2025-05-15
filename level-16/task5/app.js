const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  const limit = req.query.limit || 5; 

  if (!query) {
    return res.send('Please provide a search query using the "q" parameter.');
  }

  res.send(`Search for: ${query}, Limit: ${limit}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
