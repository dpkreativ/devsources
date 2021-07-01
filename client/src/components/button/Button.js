import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  padding: 1rem;
  cursor: pointer;
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
  border-radius: 1rem;
`;

const Button = ({ children }) => {
  return <CustomButton>{children}</CustomButton>;
};

export default Button;
