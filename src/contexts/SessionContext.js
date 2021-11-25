import { createContext, useState } from "react";
import useSessionReducer, {
  ERROR_LOGIN,
  SIGN_IN,
  SIGN_OUT,
} from "../hooks/useSessionReducer";

export const SessionContext = createContext({
  user: null,
  setUser:()=>{},
  session: null,
  signIn: () => {},
  logout: () => {},
  errorLogin: ()=>{},
});

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useSessionReducer();
  const [user, setUser] = useState();

  function signIn(token, id) {
    dispatch({ type: SIGN_IN, token, id });
  }

  function logout() {
    dispatch({ type: SIGN_OUT });
  }

  function errorLogin(){
    dispatch({type: ERROR_LOGIN })
  }

  const value = {
    session,
    signIn,
    logout,
    errorLogin,
    user,
    setUser,
  }

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
