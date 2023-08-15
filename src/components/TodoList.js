import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  return (
    <section className="whole_section">
      <form action="">
        <input
          className="inputfield"
          type="text"
          id="inputTodo"
          placeholder="Add to do.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
      </form>

      {todos.map((todo, index) => (
        <div
          className={`outputList ${todo.completed ? "completed" : ""} ${
            todo.deleted ? "deleted" : ""
          }`}
          key={index}
        >
          <input type="checkbox" onClick={() => toggleComplete(index)} />
          <label className={todo.completed ? "completed" : ""}>
            {todo.text}
          </label>
          <button className="deleteButton" onClick={() => deleteTodo(index)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/542/542724.png"
              alt="#"
              className="trash"
            />
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
