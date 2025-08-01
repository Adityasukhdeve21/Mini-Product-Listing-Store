import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../services/api";
import { useCart } from "../../context/CartContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import styles from "./ProductDetailsPage.module.css";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchProductById(id);
        setProduct(res.data);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!product) return <p>Product not found.</p>;

  return (
    <article className={styles.wrapper}>
      <img src={product.image} alt={product.title} />
      <div className={styles.details}>
        <h2>{product.title}</h2>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <Link to="/" className={styles.back}>
          ← Back
        </Link>
      </div>
    </article>
  );
}
