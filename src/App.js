import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input class="c-checkbox" type="checkbox" id="checkbox" />
        <div className="c-formContainer">
          <form className="c-form" action="">
            <input className="c-form__input" placeholder="E-mail" type="text" required />
            <label className="c-form__buttonLabel" for="checkbox">
              <button className="c-form__button" type="button">Send</button>
            </label>
            <label className="c-form__toggle" for="checkbox" data-title="Notify me"></label>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
