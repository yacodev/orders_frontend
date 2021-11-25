import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Home } from "./pages/Home";
import { SessionProvider } from "./contexts/sessionContext";
import ProtectedRoute from './Routes/ProtectedRoute';
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";

const appStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 414px;
  height: 896px;
  background: #f6f6f9;
  margin: auto;
`;

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

          * {
            font-family: "Source Sans Pro", sans-serif;
            font-style: normal;
            font-weight: normal;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: ffffff;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <div css={appStyles}>
        <SessionProvider>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/products/:id" component={ProductDetails} />
              <ProtectedRoute path="/cart" component={Cart} />
              <ProtectedRoute path="/" component={Home} />
            </Switch>
          </Router>
        </SessionProvider>
      </div>
    </>
  );
}

export default App;
