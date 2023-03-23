import React from 'react';
import './App.css';

function App() {
  const [url, setUrl] = React.useState('');
  
  return (
    <div className="App">
      <header className="App-header">
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
