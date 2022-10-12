import './App.css';
import * as React from 'react';
import FolderList from './components/FolderList';
import Context from './Context';

function App() {

  return (
    <div className="App">
      <Context>
        <FolderList />
      </Context>
    </div>
  );
}

export default App;
