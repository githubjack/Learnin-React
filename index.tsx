import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

{/**
Conditionally rendering using props: this could be an input to 
change a background color through checkbox checked or not equals different template using props and name
*/}


{/**
Adding keys to components
*/}
function Lake() {
  return (
      <h1>Lake</h1>
  );
}

function SkiResort() {
  return (
      <h1>Ski Resort</h1>
  );
}

function App(props) {
  /*
  return (
    <React.Fragment>
      <Lake/>
      <SkiResort />
    </React.Fragment>
  );
*/
}

{/**
access position in array by name rather than position
*/}

const [first, second, third] = [
  'popcorn',
  'pretzels',
  'pineapple'
];
console.log(first);
console.log(second);
console.log(third);
{
  /*
console.log(snacks[0]);
console.log(snacks[1]);
console.log(snacks[2]);
  */
}

root.render(
  <StrictMode>
    <React.Fragment>
      <Lake />
      <SkiResort />
    </React.Fragment>
  </StrictMode>
);
