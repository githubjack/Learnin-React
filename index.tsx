import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


// example of JSX ( create a functional component return something and call it by tag name )
/*
function Hello({Library, Message, Number}) {
//  console.log(props);
  console.log(Object.keys(length));
  return (
    <div>
      <h1>Notifying this is a {Library} component.</h1>
      <p className="message">This could be a <strong>notify</strong> component main message is <b>{Message}</b></p>
      <p>Special number is : {Number}</p>
    </div>
  )

}
*/

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
// Component reuse passing different props values
function Lake({name}) {
  return (
    <h1>{name}</h1>
  );
}
function App() {
  return (
    <div>
      <h2>App</h2>
      <Lake name="Lake tadhoe"/>
      <Lake name="Lake mae and fog"/>
      <Lake name="Lake tea at noon"/>
    </div>
  );
}


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
{
  /**
   *       <Hello Library="React" Message="Have fun" Number={3} />
   */
}
    <App />
    </div>
  </StrictMode>
);
