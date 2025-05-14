const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ Allow requests from any frontend during development
app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());

app.get("/api/key", (req, res) => {
  res.json({ apiKey: "your-spoonacular-api-key" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
