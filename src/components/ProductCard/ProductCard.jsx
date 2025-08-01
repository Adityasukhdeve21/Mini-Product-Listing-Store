import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, onAdd }) {
  // Local state to track if added was recently clicked
  const [added, setAdded] = useState(false);

  // Handler for add to cart button
  function handleAdd() {
    onAdd(product);
    setAdded(true);
   
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <article className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} loading="lazy" />
      </Link>
      <div className={styles.info}>
        <h3 title={product.title}>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={handleAdd} disabled={added}>
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
