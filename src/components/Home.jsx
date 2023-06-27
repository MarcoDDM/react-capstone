// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API and update the state
  }, []);

  if (categories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`}>
          <div>
            <div>{category.name}</div>
            <div>{category.numericValue}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
