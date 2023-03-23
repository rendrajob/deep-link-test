import React from 'react';
import './App.css';

function App() {
  const [url, setUrl] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(url);
    window.location.replace(url);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <input class="c-checkbox" type="checkbox" id="checkbox" />
        <div class="c-formContainer">
          <form class="c-form" onSubmit={handleSubmit}>
            <input class="c-form__input" placeholder="Enter url" type="text" required />
            <label class="c-form__buttonLabel" for="checkbox">
              <button disabled={!!!url} class="c-form__button" type="button">Send</button>
            </label>
            <label class="c-form__toggle" for="checkbox" data-title="Link me"></label>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
