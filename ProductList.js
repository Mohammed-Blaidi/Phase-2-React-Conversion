import React from 'react';

function ProductList({ products, activeFilter, onFilterChange }) {
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  return (
    <div className="product-list">
      <div className="filter-section">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-display-area">
        {products.map((product) => (
          <div key={product.name} className="product-item">
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;