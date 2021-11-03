import './App.css';
//import List from './Components/List'
import React, {useState} from 'react';

function App() {
  const [newTodo,setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    const todoItem = {
      text: newTodo,
      complete: false
    }
    setTodos([...todos, todoItem]);
    setNewTodo("")

    if (todoItem.text.length === 0) {
      return;
    }

  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== delIdx
    })
    setTodos(filteredTodos)
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <header>
        <form onSubmit={(e) => {
          handleNewTodoSubmit(e)
        }}>
          <input onChange={(e) => {
            setNewTodo(e.target.value)
          }} type="text" value={newTodo}/>
          <div>
            <button>Add</button>
          </div>
        </form>
        {todos.map((todo, i) => {
          const todoClasses = [];
          if (todo.complete) {
            todoClasses.push("line-through")
          }
          return (
          <div key={i}>
            <input onChange={(e) => {
              handleToggleComplete(i);
            }} checked={todo.complete} type="checkbox"/>
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button onClick={(e) => {
              handleTodoDelete(i);
            }}>Delete</button>
          </div>);
        })}
      </header>
    </div>
  );
}

export default App;
