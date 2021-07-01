import Button from "./components/button/Button";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <section>
        <Button>Suggest Resource</Button>
      </section>
    </div>
  );
};

export default App;
