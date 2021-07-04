import React from "react";
import styled from "styled-components";
const CustomCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;

  .title,
  .description {
    margin-bottom: 0.5rem;
    color: var(--secondary-color);
  }
`;

const ResourceCard = ({ title, description, link }) => {
  return (
    <CustomCard>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <a href={`${link}`}>
        <p>{link}</p>
      </a>
    </CustomCard>
  );
};

export default ResourceCard;
