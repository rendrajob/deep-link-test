import React from 'react';
import { cookies } from 'next/headers';
import './App.css';

function App() {
  const cookieStore = cookies();
  const [url, setUrl] = React.useState('');
  const handleClick = (e) => {
    e.preventDefault();
    console.log('URL :: ', url);
    window.location.replace(url);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <input class="c-checkbox" type="checkbox" id="checkbox" />
        <form class="c-formContainer" onSubmit={handleClick}>
          <div class="c-form">
            <input value={url} onChange={(e) => setUrl(e.target.value)} class="c-form__input" placeholder="Enter url" type="text" required />
            <label class="c-form__buttonLabel" for="checkbox">
              <button onClick={handleClick} class="c-form__button">Send</button>
            </label>
            <label class="c-form__toggle" for="checkbox" data-title="Link me"></label>
          </div>
        </form>
        {cookieStore.getAll().map((cookie) => (
          <div key={cookie.name}>
              <p>Name: {cookie.name}</p>
              <p>Value: {cookie.value}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
