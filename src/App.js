import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input class="c-checkbox" type="checkbox" id="checkbox" />
        <div class="c-formContainer">
          <form class="c-form" action="">
            <input class="c-form__input" placeholder="E-mail" type="text" required />
            <label class="c-form__buttonLabel" for="checkbox">
              <button class="c-form__button" type="button">Send</button>
            </label>
            <label class="c-form__toggle" for="checkbox" data-title="Notify me"></label>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
