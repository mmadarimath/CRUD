import { useState } from "react";
import AddTodo from "./components/Addtodo";
import CategoryFilter from "./components/CategoryFilter ";
import SearchBar from "./components/Searchbar";
import TodoList from "./components/TodoList";

const initialTodos = [
  { id: 1, task: "Buy groceries", completed: false, category: "Personal" },
  { id: 2, task: "Finish React practice", completed: true, category: "Study" },
  {
    id: 3,
    task: "Send project update email",
    completed: false,
    category: "Work",
  },
  { id: 4, task: "Read JavaScript book", completed: false, category: "Study" },
  { id: 5, task: "Clean workspace", completed: true, category: "Personal" },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // ✅ DERIVED TODOS
  const visibleTodos = todos.filter((todo) => {
    const matchesSearch = todo.task
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || todo.category === category;

    return matchesSearch && matchesCategory;
  });

  function addTodo(text) {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        task: text,
        completed: false,
        category: "Personal",
      },
    ]);
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleCompleted(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function startEdit(todo) {
    setEditId(todo.id);
    setEditValue(todo.task);
  }

  function saveEdit(id) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, task: editValue } : todo))
    );
    cancelEdit();
  }

  function cancelEdit() {
    setEditId(null);
    setEditValue("");
  }

  return (
    <div className="app">
      <h1>Todo App</h1>

      <SearchBar value={search} onChange={setSearch} />

      <AddTodo onAdd={addTodo} />

      <CategoryFilter category={category} onChange={setCategory} />

      <TodoList
        todos={visibleTodos}
        editId={editId}
        editValue={editValue}
        onEditValueChange={setEditValue}
        onToggle={toggleCompleted}
        onDelete={deleteTodo}
        onStartEdit={startEdit}
        onSaveEdit={saveEdit}
        onCancelEdit={cancelEdit}
      />
    </div>
  );
}
