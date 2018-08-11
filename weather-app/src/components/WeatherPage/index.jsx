/* 
   Universidad del Valle de Guatemala 
   Autora: Andrea Maria Cordon Mayen
   Carne: 16076
   Fecha: 10/08/2018
   index.jsx
*/

import React from 'react';

import Input from '../Inputs';
import Icon from '../Icons';
import './weatherPage.css';


const WeatherPage = ({
  currentIcon = 'cloudy',
  inputSize = 'medium',
}) => (
  <div className="weatherPage">
    <div className="upperBar">
      <p className="title">Weather App</p>
      <p className="city">City</p>
      <Icon className="icon"
        icon={currentIcon}/>
      <p className="temerature">16 C</p>
    </div>
    <div className="inputSpace">
      <Input className="input"
        size={inputSize}/>
      <button className="goButton">Go</button>
    </div>
    
  </div>
);


export default WeatherPage;
