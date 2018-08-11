/* 
   Universidad del Valle de Guatemala 
   Autora: Andrea Maria Cordon Mayen
   Carne: 16076
   Fecha: 10/08/2018
   index.jsx 
*/



import React from 'react';
import './icons.css';

const POSSIBLE_ICONS = [
    'sunny',
    'rainy',
    'cloudy',
    'night',
];

const Icon = ({
  icon = 'sunny',
}) => (
  <image
    className={
      `
        icon
        ${ POSSIBLE_ICONS.includes(icon) ? icon: '' }
      `
    }
  />
);


export default Icon;