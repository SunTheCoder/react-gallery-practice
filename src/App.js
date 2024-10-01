import React from 'react';
import { useTheme } from './context/ThemeContext'; // Import useTheme
import { ArtProvider } from './context/ArtContext';
import ArtPieceList from './components/ArtPieceList';
import ArtPieceDetails from './components/ArtPieceDetails';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme

  return (
    <ArtProvider>
      <div className={`App ${theme}`}> {/* Apply the theme as a class */}
        <header>
          <h1>Art Gallery</h1>
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </header>

        <main>
          <ArtPieceList />
          <ArtPieceDetails />
        </main>
      </div>
    </ArtProvider>
  );
}

export default App;
