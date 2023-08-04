import { FaArrowsLeftRight } from "react-icons/fa6";
import "./App.css";
import { useState } from "react";

function App() {
  const [range, setRange] = useState(50);
  const inputHander = (e) => {
    setRange(e.target.value);
  };

  return (
    <main>
      <div style={{ "--position": `${range}%` }} className="container">
        <div className="image-container">
          <img
            className="image-before image-slide"
            src="../before.png"
            alt="image before"
          />
        </div>
        <div className="image-container">
          <img
            className="image-after image-slide"
            src="../after.png"
            alt="image after"
          />
        </div>
        <input
          type="range"
          min={0}
          max={100}
          onChange={(e) => inputHander(e)}
          className="slider"
        />
        <div className="slider-line"></div>
        <div className="slider-button">
          <FaArrowsLeftRight />
        </div>
      </div>
    </main>
  );
}

export default App;
