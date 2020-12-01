import React from 'react';
import { Link } from 'react-router-dom';
import { TopBarContainer, TopBarLogo, TopBarLink } from './styles/MoviesStyled';

const TopBar = () => {
  return (
    <>
      <TopBarContainer className="navbar">
        <TopBarLogo> React Movies </TopBarLogo>
        <Link to="/movies" style={{ textDecoration: 'none' }}>
          <TopBarLink> All Movies </TopBarLink>
        </Link>
        <Link to="/playlist" style={{ textDecoration: 'none' }}>
          <TopBarLink> Playlist </TopBarLink>
        </Link>
      </TopBarContainer>
    </>
  );
};

export default TopBar;