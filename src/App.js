import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
