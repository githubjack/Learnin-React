import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

{/**
const LakeList = [
  { id: '1', name: 'Echo', trailhead: 'Echo'},
  { id: '2', name: 'Maud', trailhead: 'Maudster'},
  { id: '3', name: 'Rose', trailhead: 'Rose Water'},
];
*/}

const list = [1, 2, 3, 4, 5]

function App({ items }) {
  return (
    <div>
      

      {
        /**
         * 
         *       
         * <ul>
            {lakes.map(lake => (
              <li>{lake}</li>
            ))}
          </ul>
         */
      }

      {
        /*
      <div>
        {lakes.map(lake => (
          <div key={lake.id}>
            <h2>{lake.name} {lake.id}</h2>
            <p>Trailhead: <u>{lake.trailhead}</u></p>
          </div>
        ))}
      </div>
        */ 
      }
      {
        /*
        Conditional rendering
        */
      }
        <ul>
          {items.map(item => (
            <li key={item.toString()}>{item}</li>
          ))}
        </ul>
    </div>
  );
}


root.render(
  <StrictMode>
    <div>
      <App items={list} />
    </div>
  </StrictMode>
);
