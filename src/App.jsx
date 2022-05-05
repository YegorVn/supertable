import React from 'react';
import { Table } from './components/Table';

function App() {
  return (
    <div className="App">
      <div className="input-roll">
        <input className="input input-roll__input" />
        <select className="select input-roll__select">
          <option className="select__option">asd</option>
        </select>
        <select className="select input-roll__select">
          <option className="select__option">asd</option>
        </select>
      </div>
      <Table className="main-table" />
    </div>
  );
}

export default App;
