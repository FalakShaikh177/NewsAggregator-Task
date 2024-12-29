import React, { useState } from "react";
import { searchNews } from "../api/newsAPI"; // Assuming searchNews is your function to fetch articles

const SearchBar = ({ updateArticles }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const articles = await searchNews(query); // Fetch articles based on the search query
      if (articles && articles.length > 0) {
        updateArticles(articles); // Pass the fetched articles to the parent component
      } else {
        updateArticles([]); // If no articles found, pass an empty array
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      updateArticles([]); // Handle error by passing an empty array
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
