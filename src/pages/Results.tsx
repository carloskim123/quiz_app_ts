import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Results.css"; // Import the CSS file
import { CountContext } from "../context/CountContext";

export default function Results() {
  const { correctCount, incorrectCount } = useContext(CountContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (correctCount === 0 || incorrectCount === 0) {
      navigate("/");
    }
  }, [navigate, correctCount, incorrectCount]);

  const handleClick = () => {
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
        play again
      </button>
    </div>
  );
}
