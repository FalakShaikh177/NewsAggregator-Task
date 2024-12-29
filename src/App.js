import React, { useState } from "react";
import NewsList from "./components/NewsList";
import SearchBar from "./components/SearchBar";
import DateFilter from "./components/DateFilter";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);

  const updateArticles = (newArticles) => {
    setArticles(newArticles);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">News Aggregator</h1>
      <SearchBar updateArticles={updateArticles} />
      <DateFilter updateArticles={updateArticles} />
      <NewsList articles={articles} /> {/* Pass articles directly to NewsList */}
    </div>
  );
};

export default App;
