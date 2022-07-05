import React from 'react';
import './App.css';
import Sortarr from './Component/Array.js' ;
import Maping from './Component/Map';
import Text from './Component/Text' ;
function App() {
  return (
    <div className="App">
      <header className="container">
      <Sortarr />
      <Maping />
      <Text />
      </header>
    </div>
  );
}
export default App;
