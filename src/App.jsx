import React from 'react';
import './App.css';
import MenuProjet from './components/menuProjet/MenuProjet';
import Titre from './components/titre/Titre';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Titre/>
        <Menu/>
        
      </header>

      <main>
      <MenuProjet/>
      </main>
    </div>
  );
}

export default App;
