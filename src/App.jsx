import "./App.css";
import Digit from "./Digit";

const digits = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "123",
];

function App() {
  return (
    <div className="main">
      <div className="inputBox">
        <input type="text" className="text" />
      </div>
      <div className="box">
        <Digit alpha={digits} />
      </div>
    </div>
  );
}

export default App;
