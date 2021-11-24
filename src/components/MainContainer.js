import styled from "@emotion/styled";
import chevronLeft from "../static/icons/chevron_left.svg";
import { SemiBoldL } from "./UI/Typography";
import {  useHistory } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
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
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 312px;
  margin-top: auto;
`;

export default function MainContainer({ children, title }) {
  const history = useHistory();
  const currentPath = history.location.pathname;

  const homeIcon = currentPath === "/home" ? "home-selected.svg" : "home.svg";
  const historyIcon = currentPath === "/history" ? "history-selected.svg" : "history.svg";

  return (
    <StyledDiv>
      {
        title &&
        <>
          <Header>
            <LinkButton size="24px" onClick={() => history.goBack()}>
            <img src={chevronLeft} alt="Previous page" />
            </LinkButton>
          </Header>
          <Title>{title}</Title>
        </>
      }
      {children}
      <NavBar>
        <LinkButton onClick={() => history.push("/home")}>
          <img src={`/img/${homeIcon}`} alt="Home link" />
        </LinkButton>
        <LinkButton onClick={() => history.push("/history")}>
          <img src={`/img/${historyIcon}`} alt="History link" />
        </LinkButton>
      </NavBar>
    </StyledDiv>
  );
}
