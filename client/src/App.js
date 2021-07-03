import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "./components/button/Button";
import ResourceCard from "./components/card/ResourceCard";
import Nav from "./components/nav/Nav";
import Modal from "./components/modal/Modal";

const Container = styled.div`
  padding: 1rem;
  max-width: 1024px;
  margin: auto;

  @media screen and (min-width: 800px) {
    padding: 1rem 3rem;
  }
`;

const CustomSection = styled.section`
  margin: 1rem 0;

  .section-heading {
    color: var(--primary-color);
    padding: 1rem;
  }
`;

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [allResources, setAllResources] = useState([]);

  // const baseURL = `https://devsources-api.herokuapp.com/`;

  const getResources = () => {
    axios
      .get(`https://devsources-api.herokuapp.com/resources`)
      .then((res) => setAllResources(res))
      .then(console.log(allResources))
      .catch((err) => console.log(err));
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container className="App">
        <Nav />
        <CustomSection>
          <Button onClick={openModal}>Suggest Resource</Button>
          <Modal onClose={openModal} open={showModal}>
            Hello, testing
          </Modal>
        </CustomSection>
        <CustomSection>
          <h2 className="section-heading">Suggestions:</h2>
          <ResourceCard
            title="FreeCodeCamp"
            description="A free learning platform for developers"
            link="https://freecodecamp.org"
          />
        </CustomSection>
      </Container>
    </>
  );
};

export default App;
