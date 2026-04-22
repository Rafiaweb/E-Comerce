import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 50,
    size: "40-45 EU",
    design: "Sport Running",
    color: "Black/White",
    desc: "Comfortable running shoes for daily use.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 100,
    size: "Universal",
    design: "Touch Display",
    color: "Black",
    desc: "Track fitness and notifications easily.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
  },
  {
    id: 3,
    name: "Travel Bag",
    price: 80,
    size: "Large",
    design: "Water Resistant",
    color: "Grey",
    desc: "Durable travel backpack.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
  },
  {
    id: 4,
    name: "Headphones",
    price: 60,
    size: "Adjustable",
    design: "Noise Cancelling",
    color: "Black",
    desc: "High quality bass sound experience.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 40,
    size: "Free Size",
    design: "UV Protection",
    color: "Black",
    desc: "Stylish sunglasses for protection.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
  },
  {
    id: 6,
    name: "Laptop",
    price: 500,
    size: "15.6 inch",
    design: "Slim Design",
    color: "Silver",
    desc: "High performance laptop.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setShowCart(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>

      {/* NAVBAR */}
      <div className="navbar">
        <h1>RAFIA'S STORE</h1>

        <button onClick={() => setShowCart(!showCart)}>
          Cart ({cart.length})
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="container">
        <div className="products">

          {products.map((p) => (
            <div key={p.id} className="card">

              <img src={p.image} alt={p.name} />

              <h3>{p.name}</h3>
              <p className="price">${p.price}</p>

              <button onClick={() => setSelected(p)}>
                View Details
              </button>

              <button onClick={() => addToCart(p)}>
                Add to Cart
              </button>

            </div>
          ))}

        </div>

        {/* CART */}
        {showCart && (
          <div className="cart">
            <h2>Your Cart 🛒</h2>

            {cart.map((c, i) => (
              <p key={i}>{c.name} - ${c.price}</p>
            ))}

            <h3>Total: ${total}</h3>

            <button onClick={() => setShowCart(false)}>
              Close
            </button>
          </div>
        )}

        {/* MODAL */}
        {selected && (
          <div className="modal">
            <div className="modal-box">

              <img src={selected.image} />

              <h2>{selected.name}</h2>

              <p><b>Price:</b> ${selected.price}</p>
              <p><b>Size:</b> {selected.size}</p>
              <p><b>Design:</b> {selected.design}</p>
              <p><b>Color:</b> {selected.color}</p>
              <p>{selected.desc}</p>

              <button onClick={() => setSelected(null)}>
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}