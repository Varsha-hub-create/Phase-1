const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// In-memory products array
let products = [
  { id: 1, name: 'Laptop', price: 52000 , description: 'A powerful laptop' },
  { id: 2, name: 'Phone', price: 25000, description: 'A smartphone' },
  { id: 3, name: 'Tablet', price: 35000, description: 'A sleek tablet' }
];

// GET /products - List all products
app.get('/products', (req, res) => {
  res.status(200).json(products);
});

// GET /products/:id - Get a product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.status(200).json(product);
});

// POST /products - Create a new product
app.post('/products', (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    return res.status(400).send('All fields are required');
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id - Update a product
app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');

  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    return res.status(400).send('All fields are required');
  }

  product.name = name;
  product.price = price;
  product.description = description;

  res.status(200).json(product);
});

// DELETE /products/:id - Delete a product
app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Product not found');

  const deleted = products.splice(index, 1);
  res.status(200).json(deleted[0]);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
