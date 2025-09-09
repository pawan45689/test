import express from "express";
const app = express();

// Middleware (POST request body read karne ke liye)
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("<h1>🏠 Home Page</h1><p>Welcome to Express Test!</p>");
});

// About route
app.get("/about", (req, res) => {
  res.send("<h1>ℹ️ About Page</h1><p>This is a simple Express app without DB.</p>");
});

// POST route (number check)
app.post("/number", (req, res) => {
  const { number } = req.body;
  if (!number) {
    return res.status(400).send({ error: "❌ Number is required" });
  }
  res.send({ message: `✅ You sent number: ${number}` });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
