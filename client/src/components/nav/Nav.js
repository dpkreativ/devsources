import React from "react";
import styled from "styled-components";

const CustomNav = styled.nav`
  padding: 1rem 0;
  color: var(--primary-color);
`;

const Nav = () => {
  return (
    <CustomNav>
      <h1>Devsources</h1>
      <p>Community-curated resources for developers and designers</p>
    </CustomNav>
  );
};

export default Nav;
