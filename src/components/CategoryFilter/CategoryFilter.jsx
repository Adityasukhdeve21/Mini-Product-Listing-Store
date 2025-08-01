import styles from "./CategoryFilter.module.css";

export default function CategoryFilter({ categories, current, onChange }) {
  return (
    <select
      value={current}
      onChange={(e) => onChange(e.target.value)}
      className={styles.select}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
