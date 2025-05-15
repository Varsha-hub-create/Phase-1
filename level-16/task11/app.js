const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static('public'));

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = 'uploads/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// File type filter: allow only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  if (allowedTypes.test(ext) && mime.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // optional: max 5MB
});

// Serve the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

// Handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).send('<h2>No file uploaded.</h2>');

  const { originalname, mimetype, filename, size } = req.file;
  res.send(`
    <h2>Upload Successful!</h2>
    <p><strong>Original Name:</strong> ${originalname}</p>
    <p><strong>MIME Type:</strong> ${mimetype}</p>
    <p><strong>Saved As:</strong> ${filename}</p>
    <p><strong>Size:</strong> ${(size / 1024).toFixed(2)} KB</p>
    <a href="/">Upload another</a>
  `);
});

// Handle upload errors
app.use((err, req, res, next) => {
  res.status(500).send(`<h2>Upload Error:</h2><p>${err.message}</p><a href="/">Try again</a>`);
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
