/* 
   Universidad del Valle de Guatemala 
   Autora: Andrea Maria Cordon Mayen
   Carne: 16076
   Fecha: 10/08/2018
   App.js 
*/



import React, { Component } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <WeatherApp />
      </div>
    );
  }
}

export default App;
