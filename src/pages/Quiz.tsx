import { useState } from "react";
import { questions } from "../db/quizes";
import { useNavigate } from "react-router-dom";
import "../styles/Quiz.css";

export default function Quiz({
  correctCount,
  setCorrectCount,
  incorrectCount,
  setInCorrectCount,
}) {
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(
    questions.map(() => false)
  );
  const navigate = useNavigate();

  const checkIfIsAnswer = (e, question) => {
    setIsSubmitButtonDisabled(false);

    const updatedButtonStates = isButtonDisabled.map((state, index) =>
      index === questions.indexOf(question) ? true : state
    );
    setIsButtonDisabled(updatedButtonStates);

    e.target.style.textDecoration = "line-through";
    e.target.style.backgroundColor = "green";

    if (e.target.innerText === question.correct_answer) {
      setCorrectCount(correctCount + 1);
    } else {
      setInCorrectCount(incorrectCount + 1);
      e.target.style.backgroundColor = "orange";
    }
  };

  return (
    <div className="quiz-container">
      <header>
        <h2>Quiz App React</h2>
        <link href="https://github.com/"></link>
      </header>
      <div className="quiz-element">
        {questions.map((question, index) => (
          <span>
            <span>Question {index + 1}:</span>
            <div key={question.index} className="question-container">
              <h2 className="question">{question.question}</h2>
              <ul className="answer-list">
                {question.answers.map((answer) => (
                  <button
                    key={answer}
                    className="answer-button"
                    onClick={(e) => checkIfIsAnswer(e, question)}
                    disabled={isButtonDisabled[index]}
                  >
                    {answer}
                  </button>
                ))}
              </ul>
            </div>
          </span>
        ))}
      h</div>
      <button
        className="submit-button"
        disabled={isSubmitButtonDisabled}
        onClick={() => navigate("/results")}
      >
        Submit
      </button>
    </div>
  );
}
