import React, { useState, useEffect } from "react";
import "./App.css";

// HEADER COMPONENT
function Header() {
  return (
    <header className="header">
      <h1>Amazon Product Store</h1>
    </header>
  );
}

// PRODUCT CARD COMPONENT
function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
  onColorChange,
  onCityChange,
  onAdd,
  onRemove,
  onReset
}) {
  return (
    <div className="product-card">

      <h2>{productName}</h2>

      <h3>Price: ₹{price}</h3>

      <p>Selected Colour: {selectedColor}</p>

      <p>Delivery City: {deliveryCity}</p>

      <label>Select Colour:</label>

      <select
        value={selectedColor}
        onChange={(e) => onColorChange(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <br />

      <label>Delivery City:</label>

      <input
        type="text"
        value={deliveryCity}
        onChange={(e) => onCityChange(e.target.value)}
        placeholder="Enter delivery city"
      />

      <div className="buttons">

        <button onClick={onAdd}>
          Add to Cart
        </button>

        <button
          onClick={onRemove}
          disabled={quantity === 0}
        >
          Remove One
        </button>

        <button onClick={onReset}>
          Reset Cart
        </button>

      </div>

      <div className="cart-details">

        <h3>Quantity: {quantity}</h3>

        <h3>Total: ₹{quantity * price}</h3>

        <h3>
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </h3>

      </div>

    </div>
  );
}

// FOOTER COMPONENT
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Amazon Product Store</p>
    </footer>
  );
}

// MAIN APP COMPONENT
function App() {

  // STATE MANAGEMENT

  const [quantity, setQuantity] = useState(0);

  const [selectedColor, setSelectedColor] =
    useState("Black");

  const [deliveryCity, setDeliveryCity] =
    useState("Coimbatore");

  const [showProduct, setShowProduct] =
    useState(true);

  const productName = "Wireless Mouse";

  const price = 499;

  // LIFECYCLE USING useEffect

  useEffect(() => {
    document.title = "Amazon Product Store";
  }, []);

  // ADD TO CART

  const addToCart = () => {
    setQuantity(prev => prev + 1);
  };

  // REMOVE ONE

  const removeOne = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  // RESET CART

  const resetCart = () => {
    setQuantity(0);
  };

  // SHOW / HIDE PRODUCT

  const toggleProduct = () => {
    setShowProduct(prev => !prev);
  };

  return (
    <div className="app">

      <Header />

      <div className="toggle-section">

        <button onClick={toggleProduct}>
          {showProduct ? "Hide Product" : "Show Product"}
        </button>

      </div>

      {showProduct && (

        <ProductCard
          productName={productName}
          price={price}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
          onColorChange={setSelectedColor}
          onCityChange={setDeliveryCity}
          onAdd={addToCart}
          onRemove={removeOne}
          onReset={resetCart}
        />

      )}

      <Footer />

    </div>
  );
}

export default App;