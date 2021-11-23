import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { SessionContext } from "../../contexts/SessionContext";

export default function ProtectedRoute({
  component: Component,
  ...restOfProps
}){
  const ctx = useContext(SessionContext)
  console.log("CONTEXT",ctx)
  return(
    <Route
      {...restOfProps}
      render={(props) =>
        ctx.session.token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}