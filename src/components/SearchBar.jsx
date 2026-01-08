export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="input"
      placeholder="Search todos..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
