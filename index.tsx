import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

{/**
  Using useState
*/}


function App(props) {
  const [year, setYear] = React.useState(2050);
  const [manager, setManager] = React.useState('Alex');
  const [status, setStatus] = React.useState('Open');
  return (
    <div>
      <div>
      <h1>{year}</h1>
      <button onClick={() => setYear(year +1)}>Set Year</button>
      </div>
      <h2>Status: {status}</h2>
      <div>
        <h3>Manager on Duty: {manager}</h3>
        <button onClick={() => setManager('Rachel')}>New Manager</button>
      </div>
      <div>
        <button onClick={() => setStatus('Open')}>Open</button>
        <button onClick={() => setStatus('Back in 5')}>Break</button>
        <button onClick={() => setStatus('Closed')}>Closed</button>
      </div>
    </div>
  );

}



root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
