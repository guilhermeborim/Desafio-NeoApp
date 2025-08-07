import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const ComicInfo = styled.div`
  margin-top: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  padding-top: 12px;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const RareTag = styled.span`
  background-color: gold;
  color: #000;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const BuyButton = styled.button`
  margin-top: 1.5rem;
  padding: 12px 24px;
  background-color: #e63946;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d62828;
  }
`;
