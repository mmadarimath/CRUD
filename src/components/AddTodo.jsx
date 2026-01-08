import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [value, setValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  }

  return (
    <input
      className="input"
      placeholder="Add a new todo..."
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
