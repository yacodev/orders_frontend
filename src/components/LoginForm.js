/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { useContext, useState } from "react";
import { SessionContext } from "../contexts/sessionContext";
import { SemiBoldL, RegularS } from "./UI/Typography";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 314px;
  margin: auto;
  
`;

const ContainerMessageError = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:20px;
  text-align:center;
`

export const LoginForm = ({type, onClick }) => {
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
    <ContainerLogin>
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
        <ContainerMessageError>
          <SemiBoldL color="#FA4A0C"> Datos incorrectos </SemiBoldL>
          <RegularS> Vuelva ingresar tu email y contraseña </RegularS>
        </ContainerMessageError>
        )}
      <Button onClick={onClick} text={type} marginTop="100px" />
    </ContainerLogin>
  );
};
