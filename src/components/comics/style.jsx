import styled from "styled-components";

export const GridContainer = styled.main`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ComicCard = styled.div`
  position: relative;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
`;

export const RareTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: gold;
  color: #000;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.875rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
