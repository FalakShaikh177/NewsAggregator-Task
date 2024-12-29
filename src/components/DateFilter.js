import React, { useState } from "react";
import { fetchNewsByDate } from "../api/newsAPI";

const DateFilter = ({ updateArticles }) => {
  const [date, setDate] = useState("");

  const handleDateFilter = async (e) => {
    e.preventDefault();
    try {
      const results = await fetchNewsByDate(date);
      updateArticles(results);
    } catch (error) {
      console.error("Error fetching news by date:", error.message);
    }
  };

  return (
    <form onSubmit={handleDateFilter} className="mb-4">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-secondary">
        Filter by Date
      </button>
    </form>
  );
};

export default DateFilter;
