import React from 'react';
import './App.scss';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <div className="todo">
        <h1>Today</h1>
        <Tasks />
      </div>
    </div>
  );
}

export default App;
