import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: transparent;
`;

export const Dot = styled(motion.span)`
  width: 12px;
  height: 12px;
  margin: 0 6px;
  background-color: #e62429;
  border-radius: 50%;
  display: inline-block;
`;
