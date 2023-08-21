import { Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import CountProvider from "./context/CountContext";

function App() {
  return (
    <CountProvider>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </CountProvider>
  );
}

export default App;
