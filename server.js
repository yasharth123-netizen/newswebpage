const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Replace with your actual NewsAPI key (https://newsapi.org/)
const NEWS_API_KEY = 'YOUR_NEWSAPI_KEY';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

// Serve static HTML, CSS, JS files
app.use(express.static(__dirname));

// API endpoint to get news
app.get('/api/news', async (req, res) => {
    try {
        const response = await fetch(NEWS_URL);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news data' });
    }

});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
