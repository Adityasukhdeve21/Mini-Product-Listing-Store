import { useCart } from "../../context/CartContext";
import styles from "./CartSidebar.module.css";

export default function CartSidebar() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <aside className={styles.sidebar}>
      <h2>Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>✕</button>
              </li>
            ))}
          </ul>
          <button className={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </aside>
  );
}
