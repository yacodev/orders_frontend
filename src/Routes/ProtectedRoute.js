import { useContext } from "react";
import { Route, Redirect } from "react-router";
import { SessionContext } from "../contexts/sessionContext";

export default function ProtectedRoute({
  component: Component,
  ...restOfProps
}){
  const ctx = useContext(SessionContext)
  return(
    <Route
      {...restOfProps}
      render={(props) =>
        ctx.session.token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}