import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [products] = useState([
    { name: "Product 1", category: "Electronics", price: 100 },
    { name: "Product 2", category: "Clothing", price: 50 },
    { name: "Product 3", category: "Electronics", price: 200 },
    { name: "Product 4", category: "Clothing", price: 30 },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  return (
    <div className="app">
      <h1>Product List</h1>
      <ProductList
        products={filteredProducts}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;