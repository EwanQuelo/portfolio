import React from 'react';
import './App.css';
import MenuProjet from './components/menuProjet/MenuProjet';
import Titre from './components/titre/Titre';
import Menu from './components/menu/Menu';
import Reseaux from './components/reseaux/Reseaux';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='queryPhone'>
          <Reseaux />
          <Titre />
          <Menu />
        </div>
       
        <nav className="menuPhone">
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" /></svg>
      
                {/* <Reseaux/> */}
                <Titre />
                {/* <Menu /> */}
        </nav>

      </header>

      <main>
        <MenuProjet />
      </main>
    </div>
  );
}

export default App;
