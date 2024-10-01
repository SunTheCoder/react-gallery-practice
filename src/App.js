import React from 'react';
import { ArtProvider } from './context/ArtContext';
import ArtPieceList from './components/ArtPieceList';
import ArtPieceDetails from './components/ArtPieceDetails';
import './App.css'; // Import your CSS for styling

function App() {
  return (
    <ArtProvider>
      <div className="App">
        <h1>Art Gallery</h1>
        <ArtPieceList />
        <ArtPieceDetails />
      </div>
    </ArtProvider>
  );
}

export default App;