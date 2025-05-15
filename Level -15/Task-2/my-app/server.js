const express = require('express');
const mongoose = require('mongoose');
const Entry = require('./Entry'); // Make sure this points to your Mongoose model

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection (deprecated options removed)
mongoose.connect('mongodb://localhost:27017/personal_journal')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Create a new journal entry
app.post('/entries', async (req, res) => {
  try {
    const { title, description, deadline, tags } = req.body;
    const newEntry = new Entry({ title, description, deadline, tags });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: 'Error creating journal entry', error: err });
  }
});

// Get all entries with optional filters
app.get('/entries', async (req, res) => {
  try {
    const { title, date } = req.query;
    let filter = {};

    if (title) {
      filter.title = { $regex: title, $options: 'i' };
    }
    if (date) {
      filter.date = new Date(date);
    }

    const entries = await Entry.find(filter);
    res.status(200).json(entries);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching journal entries', error: err });
  }
});

// Update an existing entry
app.put('/entries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, deadline, tags } = req.body;

    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { title, description, deadline, tags },
      { new: true }
    );

    res.status(200).json(updatedEntry);
  } catch (err) {
    res.status(400).json({ message: 'Error updating journal entry', error: err });
  }
});

// Delete an entry
app.delete('/entries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Entry.findByIdAndDelete(id);
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting journal entry', error: err });
  }
});

// Get entries by tags
app.get('/entries/tags', async (req, res) => {
  try {
    const { tags } = req.query;
    const tagArray = tags.split(',');
    const entries = await Entry.find({ tags: { $in: tagArray } });
    res.status(200).json(entries);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching entries by tags', error: err });
  }
});

// Start server with port fallback
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
}).on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Trying another port...`);
    const fallbackServer = app.listen(0, () => {
      const fallbackPort = fallbackServer.address().port;
      console.log(`✅ Server started on fallback port http://localhost:${fallbackPort}`);
    });
  } else {
    console.error('❌ Server error:', err);
  }
});
