import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import useFetchData from "../../hooks/useFetchData";

import "./product.css";
import Loader from "../loader/Loader";

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
    return <Loader/>
  }

  // show error if data not found
  if (error) {
    return <p>{error}</p>;
  }

  // show message if no data found after filtering
  if (filteredData.length === 0) {
    return <p>No products found.</p>;
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
