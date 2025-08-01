import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // <-- make sure Routes & Route are imported
import Header from "./components/Header/Header";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import styles from "./App.module.css";

export default function App() {
  // State to control sidebar visibility
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className={styles.app}>
      {/* Pass toggle function to header */}
      <Header onCartClick={() => setCartOpen((v) => !v)} />

      {/* Conditionally render cart sidebar */}
      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)} />}

      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}
