import './App.css';
import Language from './components/displaylanguage.js';
import React from 'react';

function App() {

  const items:[] = ["en-US","en-GB","pt-BR"]
  
  return (
    <div className="App">
     <Language name={items}/>
    </div>
  );

}

export default App;
