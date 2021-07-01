import React from "react";
import styled from "styled-components";

const CustomNav = styled.nav`
  padding: 1rem;

  h1 {
    color: var(--primary-color);
  }
`;

const Nav = () => {
  return (
    <CustomNav>
      <h1>Devsources</h1>
    </CustomNav>
  );
};

export default Nav;
