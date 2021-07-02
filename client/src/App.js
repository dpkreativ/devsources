import "./App.css";
import styled from "styled-components";
import Button from "./components/button/Button";
import ResourceCard from "./components/card/ResourceCard";
import Nav from "./components/nav/Nav";

const CustomSection = styled.section`
  margin: 1rem 0;

  .section-heading {
    color: var(--primary-color);
    padding: 1rem;
  }
`;

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
