import React, { useState } from 'react';
import { Todo } from './interfaces';
import Todotable from './Todotable';


export default function Todolist() {
    const [todo, setTodo] = useState<Todo>({} as Todo);
    const [todos, setTodos] = useState<Array<any>>([]);
  
    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodo({...todo, [event.target.id]: event.target.value});
    }
  
    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTodos([...todos, todo]);
    }

    const deleteTodo = (index: number) => {
      setTodos(todos.filter((todo, i) => i !== index));
    }

    return (
        <div className="App">
          <header className="App-header">
            <p>
              Todolist with TypeScript
            </p>
          </header>
          <form onSubmit={addTodo}>
            <label htmlFor="description">
              Description:
              <input type="text" id="desc" value={todo.desc} onChange={inputChanged} />
            </label>
            <label htmlFor="date">
              Date:
              <input type="text" id="date" value={todo.date} onChange={inputChanged} />
            </label>
            <label htmlFor="priority">
              Priority:
              <input type="text" id="priority" value={todo.priority} onChange={inputChanged} />
            </label>
            <input type="submit" value="Add" />
          </form>
          <Todotable todos={todos} deleteTodo={deleteTodo}/>
        </div>
      );
};