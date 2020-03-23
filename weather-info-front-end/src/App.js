import React from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <div className="App" className="container-fluid">
      <WeatherInfo/>
    </div>
  );
}

export default App;
