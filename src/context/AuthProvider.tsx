import { createContext, ReactNode, useState } from "react";
import { AuthData } from "../lib/types";

interface AuthContextProps {
  auth?: AuthData;
  setAuth: (auth?: AuthData) => void;
}

const authContext = createContext<AuthContextProps>({} as AuthContextProps);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthData>();

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
