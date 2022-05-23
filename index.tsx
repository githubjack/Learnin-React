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

function Lake({name}) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  );
}

function SkiResort({name}) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  );
}

function App(props) {
 if(props.season === 'summer' || props.season === 'autumn') {
   return <Lake name='Jack Lake!'/>
 } else if (props.season === 'winter' || props.season === 'spring') {
   return <SkiResort name='Jackson Mountain Resort!' />
 }

}
root.render(
  <StrictMode>
    <div>
      <App season='autumn'/>
    </div>
  </StrictMode>
);
