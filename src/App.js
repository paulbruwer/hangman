import "./App.css";
import Landing from "./components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Help from "./components/Help";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/win" element={<Win />} />
        <Route exact path="/lose" element={<Lose />} />
        <Route exact path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

function Win() {
  return (
    <div>
      <h1 style={{ color: "green", fontSize: "15vw" }}>YOU LIVE!</h1>
      <Link to="/">
        <Button variant="success">Again?</Button>
      </Link>
    </div>
  );
}

function Lose() {
  return (
    <div>
      <h1 style={{ color: "Red", fontSize: "15vw" }}>YOU DIED!</h1>
      <Link to="/">
        <Button variant="danger">Try Again?</Button>
      </Link>
    </div>
  );
}

export default App;
