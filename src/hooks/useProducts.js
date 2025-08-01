import { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchByCategory,
} from "../services/api";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function loadProducts(category) {
    setLoading(true);
    try {
      const res = category ? await fetchByCategory(category) : await fetchProducts();
      setProducts(res.data);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const cats = await fetchCategories();
        setCategories(["all", ...cats.data]);
      } catch {
        setCategories(["all"]);
      }
    })();
    loadProducts(); // initial load
  }, []);

  return { products, categories, loading, error, loadProducts };
}
