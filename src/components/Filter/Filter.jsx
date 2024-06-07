import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryFilter,
  setSearchQuery,
} from "../../features/search/searchSlice";

import "./filter.css";

const categoryOptions = [
  { value: "", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "jewelery", label: "Jewelery" },
  { value: "men's clothing", label: "Men's Clothing" },
  { value: "women's clothing", label: "Women's Clothing" },
];

const Filter = () => {
  const dispatch = useDispatch();
  const { query, category } = useSelector((state) => state.search);

  // when search any title
  const handleChange = useCallback(
    (e) => {
      dispatch(setSearchQuery(e.target.value));
    },
    [dispatch]
  );

  // when select any category
  const handleCategoryChange = useCallback(
    (e) => {
      dispatch(setCategoryFilter(e.target.value));
    },
    [dispatch]
  );

  return (
    <div className="filter">
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleChange}
        />

        <div className="select">
          <select value={category} onChange={handleCategoryChange}>
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
