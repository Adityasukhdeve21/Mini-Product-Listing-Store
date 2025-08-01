import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Header.module.css";

export default function Header({ onCartClick }) {
  const { cartCount } = useCart();
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
      Mini<span>Store</span>
      </Link>
      <div className={styles.cart} onClick={onCartClick} style={{cursor: 'pointer'}}>
        <span className="material-symbols-outlined">YOUR CART</span>
        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
      </div>
    </header>
  );
}
