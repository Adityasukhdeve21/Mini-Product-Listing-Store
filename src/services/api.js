import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10_000,
});

export const fetchProducts = () => instance.get("/products");
export const fetchProductById = (id) => instance.get(`/products/${id}`);
export const fetchCategories = () => instance.get("/products/categories");
export const fetchByCategory = (category) =>
  instance.get(`/products/category/${category}`);
