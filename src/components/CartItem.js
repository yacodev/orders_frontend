import styled from "@emotion/styled";
import { Image } from "./UI/Image";
import { SemiBoldS, SemiBoldM } from "./UI/Typography";
import { Counter } from "./UI/Counter";
import { useState, useEffect } from "react";
import { ADD_ITEM } from "../constants";
import capitalize from "../utils/capitalizeString";

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 315px;
  height: 102px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  gap: 8px;
`;

export default function CartItem({
  id,
  imgURL,
  name,
  price,
  updateOrder,
  removeFromCart,
}) {
  const [count, setCount] = useState(1);
  const subTotal = (price * count) / 100;

  useEffect(() => {
    if (count === 0) removeFromCart(id);
  }, [count, id, removeFromCart]);

  function updateCount(type) {
    if (type === ADD_ITEM) {
      setCount(count + 1);
      updateOrder.addProduct(price / 100, id);
    } else {
      setCount(count - 1);
      updateOrder.substractProduct(price / 100, id);
    }
  }

  return (
    <CardContainer>
      <Image src={imgURL} alt="" size="sm" />
      <FlexContainer direction="column">
        <SemiBoldS>{capitalize(name)}</SemiBoldS>
        <FlexContainer justify="space-between">
          <SemiBoldM color="#FA4A0C">${subTotal}</SemiBoldM>
          <Counter count={count} updateCount={updateCount} />
        </FlexContainer>
      </FlexContainer>
    </CardContainer>
  );
}
