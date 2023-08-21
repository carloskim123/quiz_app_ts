import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Results.css"; // Import the CSS file

export default function Results({ correctCount, incorrectCount }) {
  const [buttonText, setButtonText] = useState("Start");
  const navigate = useNavigate();

  const handleClick = () => {
    if (correctCount > 0) {
      setButtonText("Play Again");
    } else {
      setButtonText("Start");
    }

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="results-container">
      <h2 className="result-count">
        Correct: {correctCount > 0 ? correctCount : 0}
      </h2>
      <h2 className="result-count">
        Incorrect: {incorrectCount > 0 ? incorrectCount : 0}
      </h2>
      <button className="result-button" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}
