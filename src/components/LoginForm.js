/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useContext, useState } from "react";

import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { SessionContext } from "../contexts/sessionContext";
import { SemiBoldL, RegularS } from "./UI/Typography";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 314px;
  margin: auto;
  
`;

const MessageErrorContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:20px;
  text-align:center;
`
const LoadingContainer = styled.div`
  margin-top:20px;
  text-align:center;
`

export const LoginForm = ({type, onClick, loading }) => {
  const ctx = useContext(SessionContext);
  let errorTryLogin = false;

  if(ctx.session.token == "data incorrect"){
    errorTryLogin = true;
  }
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    let newFormValues = { ...formValues };
    newFormValues[e.target.name] = e.target.value;
    setFormValues(newFormValues);
    ctx.setUser(newFormValues);
  };

  return (
    <LoginContainer>
      {
        (type === 'sing-up'&&
        (
          <>
            <Input
              label="Name"
              type="text"
              width="100%"
              marginTop="30px"
              name="first_name"
              onChange={(e) => handleForm(e)}
            />
            <Input
              label="Last Name"
              type="text"
              width="100%"
              marginTop="30px"
              name="last_name"
              onChange={(e) => handleForm(e)}
            />
          </>
        )
        )
      }
      <Input
        label="Email address"
        type="email"
        width="100%"
        marginTop="30px"
        name="email"
        onChange={(e) => handleForm(e)}
      />
      <Input
        label="Password"
        type="password"
        width="100%"
        marginTop="30px"
        name="password"
        onChange={(e) => handleForm(e)}
      />
      {errorTryLogin && (
        <MessageErrorContainer>
          <SemiBoldL color="#FA4A0C"> Datos incorrectos </SemiBoldL>
          <RegularS> Vuelva ingresar tu email y contraseña </RegularS>
        </MessageErrorContainer>
        )}
      {loading && (
        <LoadingContainer>
          <SemiBoldL color="#FA4A0C"> Loading... </SemiBoldL>
        </LoadingContainer>
        )}
      <Button onClick={onClick} text={type} marginTop="100px" />
    </LoginContainer>
  );
};
