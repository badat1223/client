import React, { Fragment } from 'react';
import './App.css';
import InputTodo from './components/InputToDo';
import ListTodo from './components/ListToDo';

function App() {
  return (
    <Fragment>

      <div className='container'>

      <InputTodo />
      <ListTodo />
      </div>
    </Fragment>

  );
}

export default App;
