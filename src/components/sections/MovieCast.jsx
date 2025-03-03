
import React from 'react';
import { IMAGE_BASE_URL } from '../../utils/constants';

const MovieCast = ({ cast }) => {
  if (!cast || cast.length === 0) {
    return <div className="no-cast">No cast information available</div>;
  }

  // Show only the first 10 cast members
  const displayCast = cast.slice(0, 10);

  return (
    <div className="cast-section">
      <h2 className="section-title">Cast</h2>
      <div className="cast-grid">
        {displayCast.map(person => {
          const profileUrl = person.profile_path 
            ? `${IMAGE_BASE_URL}${person.profile_path}` 
            : 'https://via.placeholder.com/300x450?text=No+Image';
          
          return (
            <div className="cast-card" key={person.id}>
              <div className="cast-image">
                <img src={profileUrl} alt={person.name} />
              </div>
              <div className="cast-info">
                <h3 className="cast-name">{person.name}</h3>
                <p className="cast-character">{person.character}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCast;