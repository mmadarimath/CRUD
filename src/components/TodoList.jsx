import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <ul className="list">
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} {...props} />
      ))}
    </ul>
  );
}
