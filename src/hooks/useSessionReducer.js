import { useReducer } from "react";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const ERROR_LOGIN = "ERROR_LOGIN";

function sessionReducer(state, action) {
  switch (action.type) {
    case SIGN_IN:
      const { token, id } = action;
      sessionStorage.setItem("token", JSON.stringify(token));
      return { ...state, ...{token, id} };
    case SIGN_OUT:
      sessionStorage.removeItem("token");
      return { ...state, ...{token: null, id:null} };
    case ERROR_LOGIN:
      return {...state, token:"data incorrect"}
    default:
      return state;
  }
}

export default function useSessionReducer() {
  const [state, dispatch] = useReducer(sessionReducer, {
    token: null,
    id:null,
  });

  return [state, dispatch];
}
