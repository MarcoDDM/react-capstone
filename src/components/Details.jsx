import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // Fetch data for the specific category based on the 'id' parameter and update the 'category' state
  }, [id]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{category.name}</h2>
      <div>{category.description}</div>
      <div>{category.numericValue}</div>
    </div>
  );
};

export default Details;
