import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components';


function App() {
  return (
    <div className="container">
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
