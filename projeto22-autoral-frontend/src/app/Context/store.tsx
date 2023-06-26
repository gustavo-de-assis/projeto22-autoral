"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  token: "",
  setToken: (): string => "",
  name: "",
  setName: (): string => "",
});

export const GlobalContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  return (
    <GlobalContext.Provider
      value={{ userId, setUserId, token, setToken, name, setName }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
