import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

{/**
  Using useEffect
*/}

function Checkbox() {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <div>
      <input type='checkbox' 
             value={checked}
             onChange={() => 
             setChecked(checked => !checked)} 
             />
      {checked ? 'Checked' : 'Not Checked'}
    </div>
  );
}

root.render(
  <StrictMode>
    <Checkbox />
  </StrictMode>
);
