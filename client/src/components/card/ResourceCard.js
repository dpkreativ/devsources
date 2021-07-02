import React from "react";
import styled from "styled-components";

const CustomCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 3rem;
`;

const ResourceCard = ({ title, description, link }) => {
  return (
    <CustomCard>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={`${link}`}>
        <p>{link}</p>
      </a>
    </CustomCard>
  );
};

export default ResourceCard;
