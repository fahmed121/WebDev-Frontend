import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div className="home">
      <h1>Welcome to SupremeGrill</h1>
      <p>Select an item from the menu to get started.</p>
    </div>
  );
};

export default App;
