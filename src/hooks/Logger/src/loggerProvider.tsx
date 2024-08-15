import React from "react";
import Logger from "./logger";

const LoggerContext = React.createContext(Logger);

export const useLogger = () => React.useContext(LoggerContext);

type LoggerProviderProps = {
  children?: React.ReactNode;
};

const LoggerProvider: React.FC<LoggerProviderProps> = ({ children }) => {
  return (
    <LoggerContext.Provider value={Logger}>{children}</LoggerContext.Provider>
  );
};

export default LoggerProvider;
