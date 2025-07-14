import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "15"
        },
        // add more plants here ...
      ]
    },
    // more categories here...
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>{category.category}</h1>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-cost">${plant.cost}</div>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;