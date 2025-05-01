import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Cards";
import Counter from "./components/Counter";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Card />
      <Counter />
    </>
  );
};

export default App;
