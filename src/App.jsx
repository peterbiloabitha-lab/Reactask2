
import { useState } from "react";

import products from "./data/products.json";
import Product from "./componets/Product.jsx";
import Navbar from "./bar/navbar.jsx";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((item) => {
    const categoryMatch = category === "All" || item.category === category;
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase().trim());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="container">
      <Navbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => <Product key={item._id} item={item} />)
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
