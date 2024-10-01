import React from "react";
import { useArt } from '../context/ArtContext';

const ArtPieceList = () => {

    const { artPieces, setSelectedArt } = useArt();

    return (
        <div>
            <h2>Select an Art Piece</h2>
            <ul>
                {artPieces.map((piece) => (
                    <li key={piece.id} onClick={() => setSelectedArt(piece)}>
                        {piece.title} by {piece.artist} 
                    </li>
                ))}
            </ul>
        </div>
    )



}

export default ArtPieceList;