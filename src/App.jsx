import { useState } from 'react';
import './App.css';
import DeadSeaScrolls from './DeadSeaScrolls';
import BibleNRSV from './BibleNRSV';

function App() {
  const [view, setView] = useState('home'); // home, bible, scrolls

  return (
    <div className="app-wrapper">
      <header className="header">
        <h1 style={{color:'white'}} >📚 Sacred Texts Explorer</h1>
        <div className="nav-buttons">
          {/* <button onClick={() => setView('home')}>🏠 Home</button> */}
          <button onClick={() => setView('bible')}>📘 NRSV Bible</button>
          <button onClick={() => setView('scrolls')}>📜 Dead Sea Scrolls</button>
        </div>
      </header>

      <main className="main-content">
        {view === 'home' && (
          <section className="home-section">
            <h2>Welcome to the Sacred Texts Explorer</h2>
            <p>This app provides access to the <strong>New Revised Standard Version (NRSV)</strong> of the Bible and translated <strong>Dead Sea Scrolls</strong> fragments and texts.</p>
            <p>Use the navigation buttons above to begin exploring these timeless writings.</p>
          </section>
        )}

        {view === 'bible' && <BibleNRSV />}
        {view === 'scrolls' && <DeadSeaScrolls />}
      </main>
    </div>
  );
}

export default App;
