export default function CategoryFilter({ category, onChange }) {
  const categories = ["All", "Personal", "Work", "Study"];

  return (
    <div className="filters">
      {categories.map(cat => (
        <button
          key={cat}
          className={category === cat ? "active" : ""}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
