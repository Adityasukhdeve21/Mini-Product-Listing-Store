import useProducts from "../../hooks/useProducts";
import { useCart } from "../../context/CartContext";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import styles from "./HomePage.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function HomePage() {
  // remember last filter with local storage
  const [selected, setSelected] = useLocalStorage("category", "all");

  const { products, categories, loading, error, loadProducts } = useProducts();
  const { addToCart } = useCart();

  // reload when filter changes
  function handleFilterChange(cat) {
    setSelected(cat);
    loadProducts(cat === "all" ? undefined : cat);
  }

  return (
    <section>
      <h1 className={styles.title}>Products</h1>
      <CategoryFilter
        categories={categories}
        current={selected}
        onChange={handleFilterChange}
      />

      {loading && <LoadingSpinner />}
      {error && <p>Failed to load products.</p>}

      {!loading && (
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>
      )}
    </section>
  );
}
