import React, { createContext, useContext, useState } from "react";

const FlagContext = createContext();

export function useFlag() {
  return useContext(FlagContext);
}

export function FlagProvider({ children }) {
  const [selectedFlag, setSelectedFlag] = useState(null);

  const setFlag = (flag) => {
    setSelectedFlag(flag);
  };

  return (
    <FlagContext.Provider value={{ selectedFlag, setFlag }}>
      {children}
    </FlagContext.Provider>
  );
}
