import { createContext, useState } from "react";
import useSessionReducer, {
  SIGN_IN,
  SIGN_OUT,
} from "../hooks/useSessionReducer";

export const SessionContext = createContext({
  user: null,
  setUser:()=>{},
  session: null,
  products:null,
  setProducts:()=>{},
  signIn: () => {},
  logout: () => {},
});

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useSessionReducer();
  const [user, setUser] = useState();
  const [products, setProducts] = useState([])

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
    products,
    setProducts,
  }

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
