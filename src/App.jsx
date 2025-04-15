import { useState } from 'react';
import './App.css';
import DeadSeaScrolls from './DeadSeaScrolls';
import BibleNRSV from './BibleNRSV';
import BiblicalHistory from './BiblicalHistory';

function App() {
  const [view, setView] = useState('home'); // home, bible, scrolls
  const [fontSize, setFontSize] = useState(16); // default font size in px

  const increaseFont = () => setFontSize((size) => Math.min(size + 2, 28));
  const decreaseFont = () => setFontSize((size) => Math.max(size - 2, 10));

  return (
    <div className="app-wrapper" style={{ fontSize: `${fontSize}px` }}>
      <header className="header">
        <h1 style={{ color: 'white' }} onClick={() => setView('home')}>
          Bible Research
        </h1>
        <div className="nav-buttons">
          <button onClick={() => setView('bible')}>📘 NRSV Bible</button>
          <button onClick={() => setView('scrolls')}>📜 Dead Sea Scrolls</button>
        </div>
        <div className="font-controls">
          <button onClick={decreaseFont}>A−</button>
          <button onClick={increaseFont}>A+</button>
        </div>
      </header>

      <main className="main-content">
        {view === 'home' && (
          <section className="home-section">
            {/* <h2>Welcome to the Sacred Texts Explorer</h2> */}
            <p>
              This app provides access to the <strong>New Revised Standard Version (NRSV)</strong> of the Bible and some translated <strong>Dead Sea Scrolls</strong> fragments and texts.
            </p>
            <p>Use the navigation buttons above to begin exploring these scriptures.</p>
            <BiblicalHistory />
          </section>
        )}

        {view === 'bible' && <BibleNRSV />}
        {view === 'scrolls' && <DeadSeaScrolls />}
      </main>
    </div>
  );
}

export default App;
