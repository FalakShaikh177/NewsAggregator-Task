import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const searchNews = async (query) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=4ddcf48c68f54c11af2a7e8eae86f0e3`);
    const data = await response.json();
    return data.articles || []; // Ensure it returns an empty array if no articles are found
  } catch (error) {
    console.error("Error fetching news:", error);
    return []; // Return an empty array on error
  }
};


export const fetchNewsByDate = async (date) => {
  try {
    // Make the API request with the provided date
    const response = await axios.get(`${API_BASE_URL}/news-by-date`, {
      params: { date },
    });

    // Validate and return the data
    if (response.data && response.data.articles && response.data.articles.length > 0) {
      return response.data.articles; // Return the articles array
    } else {
      console.warn("No articles found for the given date."); // Log a warning for debugging
      return []; // Return an empty array if no articles are found
    }
  } catch (error) {
    console.error("Error fetching news by date:", error.message); // Log the error for debugging
    return []; // Return an empty array in case of error
  }
};
