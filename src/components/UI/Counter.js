import styled from "@emotion/styled";
import { RegularMWhite } from "./Typography";
import { ADD_ITEM, SUBSTRACT_ITEM } from "../../constants";

export const CounterContainer = styled.div`
  background-color: #fa4a0c;
  border-radius: 30px;
  width: 52px;
  height: 20px;
  display: flex;
  flex-direction: row;
  color: #fff;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;

export const Symbol = styled.button`
  font-weight: 400;
  line-height: 23px;
  font-size: 20px;
  color: white;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Counter = ({ count, updateCount }) => {
  return (
      <CounterContainer>
        <Symbol onClick={() => updateCount(SUBSTRACT_ITEM)}> - </Symbol>
        <RegularMWhite> {count} </RegularMWhite>
        <Symbol onClick={() => updateCount(ADD_ITEM)}> + </Symbol>
      </CounterContainer>
  );
};
