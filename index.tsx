import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

{/**
  Using useEffect
*/}
 function App() {

   const [val, setVal] = React.useState('');
   const [valx, setValx] = React.useState('');
   
   React.useEffect(() => {
     console.log(`field 1: ${val}`)
   }, [val]);

   React.useEffect(() => {
    console.log(`field 2: ${valx}`)
  }, [valx]);

   return (
     <div>
       <label>Favorite phrase
         <input value={val}
                onChange={e => setVal(e.target.value)}/>
       </label>
       <hr />
       <label>Second Favorite phrase
         <input value={valx}
                onChange={e => setValx(e.target.value)}/>
       </label>
     </div>
   )
 }


root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
