import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  padding: 1rem;
`;

const Button = ({ children }) => {
  return <CustomButton>{children}</CustomButton>;
};

export default Button;
