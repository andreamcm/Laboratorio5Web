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
}) => (
  <div className="weatherPage">
    
    <div className="upperBar">
      <p className="title">Weather App</p>
      <p className="city">City</p>
    </div>
    
  </div>
);


export default WeatherPage;
