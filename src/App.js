import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Heder from './Componets/Headers/Heder';
import Counteris from './Componets/Counteris';


function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Counteris></Counteris>
    </div>
  );
}

export default App;
