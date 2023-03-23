import React from 'react';
import './App.css';

function App() {
  const [url, setUrl] = React.useState('');
  
  return (
    <div className="App">
      <header className="App-header">
        <input class="c-checkbox" type="checkbox" id="checkbox" />
        <div class="c-formContainer">
          <form class="c-form" action="">
            <input class="c-form__input" placeholder="E-mail" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required />
            <label class="c-form__buttonLabel" for="checkbox">
              <button class="c-form__button" type="button">Send</button>
            </label>
            <label class="c-form__toggle" for="checkbox" data-title="Notify me"></label>
          </form>
        </div>
        <form className="form-container">
          <div className="input-container">
            <label className="input-label">Enter the url here</label>
            <input className="text-input" type="text" value={url} disabled={!!!url} onChange={(e) => setUrl(e.target.value)} />
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
