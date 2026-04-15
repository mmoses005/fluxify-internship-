import { useState } from "react";
import "./App.css";

export default function App() {
  // Shared cart state
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container">
      <h1>Day 2 – Props & State</h1>

      {/* Task 1 */}
      <Counter />
      <ToggleCard />
      <ColorPicker />

      {/* Task 2 */}
      <ShoppingCart cartCount={cartCount}>
        <ProductCard name="Laptop" onAdd={handleAddToCart} />
        <ProductCard name="Phone" onAdd={handleAddToCart} />
        <ProductCard name="Headphones" onAdd={handleAddToCart} />
      </ShoppingCart>
    </div>
  );
}

// ================= COUNTER =================
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

// ================= TOGGLE CARD =================
function ToggleCard() {
  const [show, setShow] = useState(true);

  return (
    <div className="card">
      <h2>Toggle Card</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>This content can be toggled!</p>}
    </div>
  );
}

// ================= COLOR PICKER =================
function ColorPicker() {
  const [color, setColor] = useState("white");

  return (
    <div className="card">
      <h2>Color Picker</h2>

      <div className="buttons">
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
      </div>

      <div className="color-box" style={{ backgroundColor: color }}>
        {color}
      </div>
    </div>
  );
}

// ================= SHOPPING CART =================
function ShoppingCart({ cartCount, children }) {
  return (
    <div className="card">
      <h2>Shopping Cart</h2>
      <CartSummary count={cartCount} />

      <div className="products">{children}</div>
    </div>
  );
}

// ================= PRODUCT CARD =================
function ProductCard({ name, onAdd }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <button onClick={onAdd}>Add to Cart</button>
    </div>
  );
}

// ================= CART SUMMARY =================
function CartSummary({ count }) {
  return <h3>Items in Cart: {count}</h3>;
}