import { createContext, useState } from "react";

export const CountContext = createContext(null);

export default function CountProvider({ children }) {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setInCorrectCount] = useState(0);

  return (
    <CountContext.Provider
      value={{
        correctCount,
        setCorrectCount,
        incorrectCount,
        setInCorrectCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}
