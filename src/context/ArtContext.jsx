import React, { createContext, useState, useContext } from 'react';

// Create the context
const ArtContext = createContext();

// Custom hook to use the context
export const useArt = () => useContext(ArtContext);

// Provider component
export const ArtProvider = ({ children }) => {
  // Expanded data with 50 art pieces
  const artPieces = [
    { id: 1, title: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1503 },
    { id: 2, title: 'Starry Night', artist: 'Vincent van Gogh', year: 1889 },
    { id: 3, title: 'The Persistence of Memory', artist: 'Salvador Dalí', year: 1931 },
    { id: 4, title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', year: 1665 },
    { id: 5, title: 'The Scream', artist: 'Edvard Munch', year: 1893 },
    { id: 6, title: 'The Night Watch', artist: 'Rembrandt', year: 1642 },
    { id: 7, title: 'Guernica', artist: 'Pablo Picasso', year: 1937 },
    { id: 8, title: 'The Kiss', artist: 'Gustav Klimt', year: 1907 },
    { id: 9, title: 'The Birth of Venus', artist: 'Sandro Botticelli', year: 1486 },
    { id: 10, title: 'The Last Supper', artist: 'Leonardo da Vinci', year: 1498 },
    { id: 11, title: 'The Creation of Adam', artist: 'Michelangelo', year: 1512 },
    { id: 12, title: 'American Gothic', artist: 'Grant Wood', year: 1930 },
    { id: 13, title: 'Whistler’s Mother', artist: 'James McNeill Whistler', year: 1871 },
    { id: 14, title: 'Water Lilies', artist: 'Claude Monet', year: 1916 },
    { id: 15, title: 'The Hay Wain', artist: 'John Constable', year: 1821 },
    { id: 16, title: 'The Arnolfini Portrait', artist: 'Jan van Eyck', year: 1434 },
    { id: 17, title: 'The Garden of Earthly Delights', artist: 'Hieronymus Bosch', year: 1515 },
    { id: 18, title: 'Bal du moulin de la Galette', artist: 'Pierre-Auguste Renoir', year: 1876 },
    { id: 19, title: 'A Sunday Afternoon on the Island of La Grande Jatte', artist: 'Georges Seurat', year: 1884 },
    { id: 20, title: 'Las Meninas', artist: 'Diego Velázquez', year: 1656 },
    { id: 21, title: 'The School of Athens', artist: 'Raphael', year: 1511 },
    { id: 22, title: 'The Sleeping Gypsy', artist: 'Henri Rousseau', year: 1897 },
    { id: 23, title: 'Liberty Leading the People', artist: 'Eugène Delacroix', year: 1830 },
    { id: 24, title: 'The Raft of the Medusa', artist: 'Théodore Géricault', year: 1819 },
    { id: 25, title: 'The Death of Marat', artist: 'Jacques-Louis David', year: 1793 },
    { id: 26, title: 'Impression, Sunrise', artist: 'Claude Monet', year: 1872 },
    { id: 27, title: 'Nighthawks', artist: 'Edward Hopper', year: 1942 },
    { id: 28, title: 'The Dance', artist: 'Henri Matisse', year: 1910 },
    { id: 29, title: 'The Blue Boy', artist: 'Thomas Gainsborough', year: 1770 },
    { id: 30, title: 'The Oath of the Horatii', artist: 'Jacques-Louis David', year: 1784 },
    { id: 31, title: 'The Fighting Temeraire', artist: 'J.M.W. Turner', year: 1839 },
    { id: 32, title: 'The Card Players', artist: 'Paul Cézanne', year: 1895 },
    { id: 33, title: 'Venus of Urbino', artist: 'Titian', year: 1538 },
    { id: 34, title: 'No. 5, 1948', artist: 'Jackson Pollock', year: 1948 },
    { id: 35, title: 'The Tower of Babel', artist: 'Pieter Bruegel the Elder', year: 1563 },
    { id: 36, title: 'Composition VIII', artist: 'Wassily Kandinsky', year: 1923 },
    { id: 37, title: 'The Disintegration of the Persistence of Memory', artist: 'Salvador Dalí', year: 1954 },
    { id: 38, title: 'Olympia', artist: 'Édouard Manet', year: 1863 },
    { id: 39, title: 'The Lovers', artist: 'René Magritte', year: 1928 },
    { id: 40, title: 'Self-Portrait with Thorn Necklace and Hummingbird', artist: 'Frida Kahlo', year: 1940 },
    { id: 41, title: 'The Bride Stripped Bare by Her Bachelors, Even', artist: 'Marcel Duchamp', year: 1923 },
    { id: 42, title: 'The Storm on the Sea of Galilee', artist: 'Rembrandt', year: 1633 },
    { id: 43, title: 'The Horse Fair', artist: 'Rosa Bonheur', year: 1853 },
    { id: 44, title: 'View of Toledo', artist: 'El Greco', year: 1596 },
    { id: 45, title: 'The Laughing Cavalier', artist: 'Frans Hals', year: 1624 },
    { id: 46, title: 'Portrait of a Young Woman', artist: 'Albrecht Dürer', year: 1497 },
    { id: 47, title: 'Las Hilanderas', artist: 'Diego Velázquez', year: 1657 },
    { id: 48, title: 'The Death of Socrates', artist: 'Jacques-Louis David', year: 1787 },
    { id: 49, title: 'The Three Musicians', artist: 'Pablo Picasso', year: 1921 },
    { id: 50, title: 'The Rape of the Sabine Women', artist: 'Nicolas Poussin', year: 1638 },
    { id: 51, title: 'bacon', artist: 'yomama', year: 2001 },
    { id: 52, title: 'eggs', artist: 'yocuz', year: 1999 }
  ];

  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <ArtContext.Provider value={{ artPieces, selectedArt, setSelectedArt }}>
      {children}
    </ArtContext.Provider>
  );
};
