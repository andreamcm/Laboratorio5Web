/* 
   Universidad del Valle de Guatemala 
   Autora: Andrea Maria Cordon Mayen
   Carne: 16076
   Fecha: 10/08/2018
   index.jsx
*/


import React from 'react';

import './inputs.css';


const POSSIBLE_SIZE = [
  'small',
  'medium',
  'large',
];

const Input = ({
  size = 'medium',
}) => (
  <input
    className={
      `
        input
        ${ POSSIBLE_SIZE.includes(size) ? size : '' }
      `
    }
  />
);


export default Input;