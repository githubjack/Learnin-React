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
  const [status, setStatus] = React.useState('Open');
  return (
    <div>
      <h1>Status: {status}</h1>
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
