import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditToDo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <div className="row mt-5 text-center">
        <div className="col-md-4">
            <h3>Description</h3>    
        </div>
        <div className="col-md-4">
            <h3>Edit</h3>  
        </div>
        <div className="col-md-4">
                <h3>delete</h3>  
        </div>

      </div>
      {todos.map(todo => (
      <div className="row mt-5 text-center" key={todo.todo_id}>
        <div className="col-md-4">
            {todo.description}
        </div>
        <div className="col-md-4">
            <EditTodo todo={todo} />
        </div>
        <div className="col-md-4">
        <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
        </div>

      </div>
      ))}
      
    </Fragment>
  );
};

export default ListTodos;