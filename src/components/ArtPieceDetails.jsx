import { useArt } from '../context/ArtContext';

const ArtPieceDetails = () => {
  const { selectedArt } = useArt();

  if (!selectedArt) {
    return <div>Please select an art piece to view the details.</div>
    
  }

  return (
    <div>
      <h2>{selectedArt.title}</h2>
      <p>Artist: {selectedArt.artist}</p>
      <p>Year: {selectedArt.year}</p>
    </div>
  );
};

export default ArtPieceDetails;
