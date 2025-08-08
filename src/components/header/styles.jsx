import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  border-bottom: 1px solid grey;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  padding-top: 16px;
`;

export const ButtonWrapper = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -8px;
  background: #e62429;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
  min-width: 18px;
  text-align: center;
`;
