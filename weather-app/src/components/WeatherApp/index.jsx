/* 
   Universidad del Valle de Guatemala 
   Autora: Andrea Maria Cordon Mayen
   Carne: 16076
   Fecha: 10/08/2018
   index.jsx
*/


import React, { Fragment } from 'react';

import WeatherPage from '../WeatherPage';
//import '../../icons/cloudy';
import './weatherApp.css'



class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  


  render() {
    //const { colors, currentLight } = this.state;
    return (
      <Fragment>
        <WeatherPage/>
      </Fragment>
    );
  }
}


export default WeatherApp;
