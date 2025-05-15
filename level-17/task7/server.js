require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
