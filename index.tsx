import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


// example of JSX ( create a functional component return something and call it by tag name )
function Hello() {
  return <h1>Notifying this is a react component.</h1>
}



// example of acessing object properties in react
/*
let city = {
  name: 'Madrid',
  country: 'Spain',
  region: 'central spain',
  hotels: 4050,
  clubs: 'Real and Athletico',
  food: 'spanish souse'

};
*/

root.render(
  <StrictMode>
    <div>
      {/** 
       * 
       * 
       *
       * <h1>Hello from {city.name} is in {city.country}</h1>
      <p>Enjoy your time in {city.region} where you have the choice of <strong>{city.hotels}</strong> to choose from.</p>
      <p>If you are a <strong>Footie fan</strong> you have a choice {city.clubs} to check out, or get down to district <b>4</b> and enjoy some <strong>{city.food}</strong></p>
      */}
      
      <Hello />
    </div>
  </StrictMode>
);
