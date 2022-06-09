import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

{/**
  fetching data with useEffect as JSON Stringified
*/}
function GitHubUser({login}) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);
  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <div className='card'>
          <img src={data.avatar_url} width='120' />
        </div>
      </div>
    )
  }
  return null;
}
 function App() {
    return <GitHubUser login='githubjack' />
 }

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
