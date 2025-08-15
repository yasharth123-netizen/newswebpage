const API_KEY = "c38dd504031a472da4d602c9316af67c"; // Get from newsapi.org
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${c38dd504031a472da4d602c9316af67c}`;

async function fetchNews() {
    try {
        let response = await fetch(URL);
        let data = await response.json();

        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = "";

        data.articles.forEach(article => {
            const card = document.createElement("div");
            card.classList.add("news-card");

            card.innerHTML = `
                <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="News Image">
                <h2>${article.title}</h2>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;

            newsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();
