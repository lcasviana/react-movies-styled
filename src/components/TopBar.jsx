import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light flex justify-start items-baseline"
        style={{ position: 'sticky', top: '0', zIndex: '9999' }}>
        <span className="navbar-brand mb-0 b"> React Movies </span>
        <Link to="/movies">
          <span className="black pa2">
            All Movies
          </span>
        </Link>
        <Link to="/playlist">
          <span className="black pa2">
            Playlist
          </span>
        </Link>
      </nav>
    </>
  );
};

export default TopBar;