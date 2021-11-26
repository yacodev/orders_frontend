import styled from "@emotion/styled";
import { RegularM } from "./Typography";

const ButtonBase = styled.button`
  border-radius: 30px;
  border: none;
  width: 310px;
  height: 70px;
  margin-top: ${(props) => props.marginTop};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: ${(props) => (props.disabled ? "#B8B8BB" : "#FA4A0C")};
  .text--button {
    color: white;
  }
`;

export const Button = ({onClick, disabled, marginTop, text}) => {
  return (
    <ButtonBase
      onClick={onClick}
      disabled={disabled}
      marginTop={marginTop}
    >
      <RegularM className="text--button">{text}</RegularM>
    </ButtonBase>
  );
};
