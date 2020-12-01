import styled from 'styled-components'

export const TopBarContainer = styled.nav`
  background: #fefefe;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const TopBarLogo = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-right: 1rem;
`;

export const TopBarLink = styled.span`
  color: #212121;
  padding: 0.5rem;
  &:hover {
    font-weight: bold;
  }
`;

export const MoviesHeaderContainer = styled.header`
  padding: 1rem;
  background: #fefefe;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 46px;
  z-index: 8888;
`;

export const MoviesListContainer = styled.main`
  padding: 1rem;  
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  align-items: stretch;
`;

export const MoviesListCard = styled.article`
  height: 100%;
  cursor: pointer;
`;

export const MoviesInfoCard = styled.article`
  margin: 1rem;
  display: flex;
  flex-flow: row;
`;