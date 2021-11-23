/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 314px;
  margin: auto;
`;

export const LoginForm = (props) => {
  const ctx = useContext(SessionContext);

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
      <Input
        label="Email address"
        type="email"
        width="100%"
        marginTop="48px"
        name="email"
        onChange={(e) => handleForm(e)}
      />
      <Input
        label="Password"
        type="password"
        width="100%"
        marginTop="60px"
        name="password"
        onChange={(e) => handleForm(e)}
      />
      <Button onClick={props.onClick} text={props.type} marginTop="100px" />
    </ContainerLogin>
  );
};
