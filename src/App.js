import React from 'react';
import './App.css';

function App() {
  const [url, setUrl] = React.useState('');
  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked :: ', url);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <input class="c-checkbox" type="checkbox" id="checkbox" />
        <div class="c-formContainer">
          <div class="c-form">
            <input value={url} onChange={(e) => setUrl(e.target.value)} class="c-form__input" placeholder="Enter url" type="text" required />
            <label class="c-form__buttonLabel" for="checkbox">
              <button onClick={handleClick} class="c-form__button">Send</button>
            </label>
            <label class="c-form__toggle" for="checkbox" data-title="Link me"></label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
