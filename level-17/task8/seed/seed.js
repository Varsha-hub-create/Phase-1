const mongoose = require('mongoose');
const Product = require('../models/Product');
const dotenv = require('dotenv');
dotenv.config();

const seedProducts = [
  { name: 'iPhone 14', price: 999, category: 'Electronics', stock: 25 },
  { name: 'Samsung Galaxy S22', price: 850, category: 'Electronics', stock: 30 },
  { name: 'MacBook Pro', price: 2200, category: 'Electronics', stock: 10 },
  { name: 'AirPods Pro', price: 250, category: 'Electronics', stock: 50 },
  { name: 'Sony Headphones', price: 199, category: 'Electronics', stock: 35 },
  { name: 'Levi’s Jeans', price: 60, category: 'Clothing', stock: 45 },
  { name: 'Nike Air Max', price: 130, category: 'Clothing', stock: 20 },
  { name: 'Adidas Hoodie', price: 75, category: 'Clothing', stock: 25 },
  { name: 'Cotton T-Shirt', price: 20, category: 'Clothing', stock: 100 },
  { name: 'Formal Shoes', price: 90, category: 'Clothing', stock: 15 },
  { name: 'The Alchemist', price: 15, category: 'Books', stock: 40 },
  { name: 'Atomic Habits', price: 18, category: 'Books', stock: 60 },
  { name: 'Harry Potter Set', price: 100, category: 'Books', stock: 10 },
  { name: 'Gaming Chair', price: 250, category: 'Furniture', stock: 8 },
  { name: 'Office Desk', price: 300, category: 'Furniture', stock: 5 },
  { name: 'Coffee Table', price: 120, category: 'Furniture', stock: 12 },
  { name: 'Blender', price: 70, category: 'Home Appliances', stock: 22 },
  { name: 'Microwave Oven', price: 150, category: 'Home Appliances', stock: 10 },
  { name: 'Electric Kettle', price: 40, category: 'Home Appliances', stock: 35 },
  { name: 'LED Bulb Pack', price: 25, category: 'Home Appliances', stock: 60 },
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(seedProducts);
  console.log("Database seeded");
  mongoose.connection.close();
});
