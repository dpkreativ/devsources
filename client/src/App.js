import styled from "styled-components";
import Button from "./components/button/Button";
import ResourceCard from "./components/card/ResourceCard";
import Nav from "./components/nav/Nav";

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
  return (
    <Container className="App">
      <Nav />
      <CustomSection>
        <Button>Suggest Resource</Button>
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
  );
};

export default App;
