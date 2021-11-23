import styled from "@emotion/styled";
import { useContext, useState } from "react";

import { LoginForm } from "../components/LoginForm";
import { RegularM } from "../components/UI/Typography";

import { SessionContext } from "../contexts/SessionContext";
import { Redirect } from "react-router";
import { loginUp } from "../services/session_fetcher";
import { setFetchUser } from "../services/user_fecther";
import logoApp from "../static/images/logoApp.png";

const HeaderLogin = styled.div`
  width: 414px;
  height: 341px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
const ContainerLogo = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 180px;
    height: 71px;
  }
`;
const ContainerNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ContainerLogin = styled.div`
  background: #f6f6f9;
`;
const Line = styled.div`
  background: ${(props) => (props.enable ? "#FA4A0C" : "#FFFFFF")};
  height: 4px;
  width: 134px;
  margin-top: 14px;
`;

export const Login = () => {
  const [login, setLogin] = useState(true);
  const ctx = useContext(SessionContext);

  const savedToken = JSON.parse(sessionStorage.getItem("token"));
  if (savedToken) {
    ctx.session["token"] = savedToken;
  }

  async function loginUser() {
    const token = await loginUp(ctx.user);
    ctx.signIn(token);
  }

  async function registerUser() {
    await setFetchUser(ctx.user);
    const token = await loginUp(ctx.user);
    ctx.signIn(token);
  }

  return (
    <ContainerLogin>
      {!ctx.session.token ? (
        <>
          <HeaderLogin>
            <ContainerLogo>
              <img src={logoApp} alt="logo" />
            </ContainerLogo>
            <ContainerNavBar>
              <RegularM onClick={(e) => setLogin(true)}> Login </RegularM>
              <RegularM onClick={(e) => setLogin(false)}> Sign-up </RegularM>
            </ContainerNavBar>
            <ContainerNavBar>
              <Line enable={login} />
              <Line enable={!login} />
            </ContainerNavBar>
          </HeaderLogin>
          {login ? (
            <LoginForm type="login" onClick={(e) => loginUser()} />
          ) : (
            <LoginForm type="sing-up" onClick={(e) => registerUser()} />
          )}
        </>
      ) : (
        <Redirect to="/home" />
      )}
    </ContainerLogin>
  );
};