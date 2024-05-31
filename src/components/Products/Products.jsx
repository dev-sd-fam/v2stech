import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import useFetchData from "../../hooks/useFetchData";

import "./product.css";

const Products = () => {
  const { data, loading, error } = useFetchData("products");
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const category = useSelector((state) => state.search.category);

  // filter data based on search title & select category
  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((item) => {
      const matchesQuery = item.title.toLowerCase().includes(searchQuery);
      const matchesCategory = category ? item.category === category : true;
      return matchesQuery && matchesCategory;
    });
  }, [data, searchQuery, category]);

  // loader show while data fetching
  if (loading) {
    return (
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></circle>
        </svg>
      </div>
    );
  }

  // show error if data not found
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className="product-list">
      {filteredData.map((item) => (
        <li key={item.id} className="product-list-item">
          <h2 className="title">{item.title}</h2>
          <span className="category">{item.category}</span>
        </li>
      ))}
    </ul>
  );
};

export default Products;
