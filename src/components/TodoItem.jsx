export default function TodoItem({
  todo,
  editId,
  editValue,
  onEditValueChange,
  onToggle,
  onDelete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
}) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onSaveEdit(todo.id);
    if (e.key === "Escape") onCancelEdit();
  }

  return (
    <li className="item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {editId === todo.id ? (
        <input
          className="edit"
          value={editValue}
          onChange={e => onEditValueChange(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span
          className={todo.completed ? "done" : ""}
          onDoubleClick={() => onStartEdit(todo)}
        >
          {todo.task}
        </span>
      )}

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}
