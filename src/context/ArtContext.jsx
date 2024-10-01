import React, { createContext, useState, useContext } from 'react';

const ArtContext = createContext()

export const useArt = () => useContext(ArtContext);

export const ArtProvider = ({ children }) => {

    const artPieces = [
        { id: 1, title: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1503 },
        { id: 2, title: 'Starry Night', artist: 'Vincent van Gogh', year: 1889 },
        { id: 3, title: 'The Persistence of Memory', artist: 'Salvador Dalí', year: 1931 },
    ];

    const [selectedArt, setSelectedArt] = useState(null)

    return (
        <ArtContext.Provider value={{ artPieces, selectedArt, setSelectedArt }}>
            {children}
        </ArtContext.Provider>
    );

};