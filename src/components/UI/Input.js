import styled from "@emotion/styled";

const InputText = styled.input`
  border: none;
  border-bottom: 1px solid #333333;
  width: 100%;
  background: #f6f6f9;
`;

const Label = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: #b8b8bb;
`;

const ContainerInput = styled.div`
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
`;

export const Input = (props) => {
  return (
    <ContainerInput width={props.width} marginTop={props.marginTop}>
      <Label htmlFor={props.name}>{props.label}</Label>
      <InputText
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
      />
    </ContainerInput>
  );
};
