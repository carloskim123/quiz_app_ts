import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

function App() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setInCorrectCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Quiz
              correctCount={correctCount}
              setCorrectCount={setCorrectCount}
              incorrectCount={incorrectCount}
              setInCorrectCount={setInCorrectCount}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              correctCount={correctCount}
              incorrectCount={incorrectCount}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
