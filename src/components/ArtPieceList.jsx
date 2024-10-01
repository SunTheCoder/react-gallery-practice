import React, { useState } from 'react';
import { useArt } from '../context/ArtContext';
import Pagination from './PageControls';

const ArtPieceList = () => {
  const { artPieces, setSelectedArt } = useArt();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Calculate the index of the first and last art piece on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArtPieces = artPieces.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Select an Art Piece</h2>
      <ul>
        {currentArtPieces.map((piece) => (
          <li key={piece.id} onClick={() => setSelectedArt(piece)}>
            {piece.title} by {piece.artist}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={artPieces.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ArtPieceList;
