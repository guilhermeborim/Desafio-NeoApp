import styled from "styled-components";

export const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-400px")};
  width: 320px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  transition: right 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  align-items: center;
  padding-top: 12px;
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 75px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  flex: 1;

  h4 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.875rem;
  }
`;

export const RemoveButton = styled.button`
  background: #e63946;
  border: none;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
`;

export const Container = styled.div`
  margin-top: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem 1.2rem;
  background-color: #e62429;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  margin-top: 12px;
  width: 100%;

  &:hover {
    background-color: #b71c1c;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: 0.5rem;
`;

export const Total = styled.h3`
  margin-top: 1rem;
  text-align: center;
`;
