import { createContext, useState } from "react";
import useSessionReducer, {
  SIGN_IN,
  SIGN_OUT,
} from "../hooks/useSessionReducer";

export const SessionContext = createContext({
  data: null,
  session: null,
  signIn: () => {},
  logout: () => {},
});

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useSessionReducer();
  const [user, setUser] = useState();

  function signIn(token) {
    dispatch({ type: SIGN_IN, token });
  }

  function logout() {
    dispatch({ type: SIGN_OUT });
  }


  const value = {
    session,
    signIn,
    logout,
    user,
    setUser,
  }

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
