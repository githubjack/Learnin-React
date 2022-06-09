import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

{/**
Using useReducer
*/}

 function Checkbox() {
   const [checked, toggle] = React.useReducer(
    checked => !checked,
    false
   );

  return (
    <React.Fragment>
      <input type='checkbox'
             value={checked}
             onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
    </React.Fragment>
  )
 }

root.render(
  <StrictMode>
    <Checkbox />
  </StrictMode>
);
