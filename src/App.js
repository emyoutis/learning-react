import React, { Component } from 'react';
import './App.css';
import TodoPanel from "./components/todo-panel/TodoPanel";

class App extends Component {
  render() {
    return (
      <>
        <TodoPanel/>
      </>
    );
  }
}

export default App;
