import React from 'react';

import List from './listTodo'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> TODO LIST</h1>
      
      <List />
     </header> 
      
    </div>
  );
}

export default App;
