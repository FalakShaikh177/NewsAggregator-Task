const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const API_KEY = "4ddcf48c68f54c11af2a7e8eae86f0e3"; // Add your actual API key from NewsAPI

// Search for news articles
app.get("/api/search", async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
    );
    res.json(response.data.articles);
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    res.status(500).send("Error fetching search results.");
  }
});

// Filter news by date
app.get("/api/news-by-date", async (req, res) => {
  try {
    const date = req.query.date;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?from=${date}&to=${date}&apiKey=${API_KEY}`
    );
    res.json(response.data.articles);
  } catch (error) {
    console.error("Error fetching news by date:", error.message);
    res.status(500).send("Error fetching news by date.");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
