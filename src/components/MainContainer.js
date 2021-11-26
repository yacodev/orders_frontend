import styled from "@emotion/styled";
import {  useHistory } from "react-router-dom";
import { useContext } from "react";

import { SessionContext } from "../contexts/sessionContext";
import { SemiBoldL } from "./UI/Typography";
import { Button } from "./UI/Button";
import { logOut } from "../services/session_fetcher";
import chevronLeft from "../static/icons/chevron_left.svg";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 50px 41px 32px 41px;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LinkButton = styled.button`
  width: ${(props) => props.size || "auto"};
  height: ${(props) => props.size || "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled(SemiBoldL)`
  width: 288px;
  text-align: center;
  padding-right: 24px;
  color:#FA4A0C;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: auto;
`;

export default function MainContainer({ children, title }) {
  const history = useHistory();
  const ctx = useContext(SessionContext);

  async function userLogout(){
    await logOut();
    ctx.logout();
    history.push("/login");
  }

  return (
    <PageContainer>
      {
        title &&
        <>
          <Header>
            <LinkButton size="34px" onClick={() => history.goBack()}>
            <img src={chevronLeft} alt="Previous page" />
            </LinkButton>
          </Header>
          <Title>{title}</Title>
        </>
      }
      {children}
      {!title && (
        <ButtonContainer>
          <Button onClick={userLogout} text="Log Out"/>
        </ButtonContainer>
      )}
    </PageContainer>
  );
}
