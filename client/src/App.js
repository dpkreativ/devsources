import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/button/Button";
import Nav from "./components/nav/Nav";
import Modal from "./components/modal/Modal";
import GetResources from "./components/resources/GetResources";
import AddResource from "./components/resources/AddResource";

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
    padding: 0 1rem;
    margin-top: 2rem;
  }
`;

const App = () => {
  const [showModal, setShowModal] = useState(false);

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
            <AddResource />
          </Modal>
        </CustomSection>
        <CustomSection>
          <h2 className="section-heading">Suggestions:</h2>
          <GetResources />
        </CustomSection>
      </Container>
    </>
  );
};

export default App;
