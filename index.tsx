import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// example of acessing object properties in react
let city = {
  name: 'Madrid',
  country: 'Spain'
};
root.render(
  <StrictMode>
    <div>
      <h1>Hello from {city.name} is in {city.country}</h1>
    </div>
  </StrictMode>
);
