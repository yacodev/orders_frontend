import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import CartItem from "../components/CartItem";
import MainContainer from "../components/MainContainer";
import { Button } from "../components/UI/Button";
import { RegularM, SemiBoldXL } from "../components/UI/Typography";
import { SessionContext } from "../contexts/sessionContext";
import useTotalReducer from "../hooks/useTotalReducer";
import { createOrder } from "../services/order_fetcher";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 30px;
  gap: 20px;
  overflow: scroll;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;

  const NoCart = styled.div`
  padding: 250px;
`;

export const Cart = () => {
  const intialProductsIdAdd = JSON.parse(sessionStorage.getItem("cart")) || [];
  const products = JSON.parse(sessionStorage.getItem("products"));
  const ctx = useContext(SessionContext);

  const cartItems = products.filter((product) =>
    intialProductsIdAdd.includes(product.id)
  );

  const [productsIdAdd, setProductsIdAdd] = useState(intialProductsIdAdd);
  const [order, updateOrder] = useTotalReducer(productsIdAdd, cartItems);
  const history = useHistory();

  function removeItem(id) {
    const updatedProductsIdAdd = productsIdAdd.filter((itemId) => itemId !== id);
    sessionStorage.setItem("cart", JSON.stringify(updatedProductsIdAdd));
    setProductsIdAdd(updatedProductsIdAdd);
  }

  async function completeOrder() {
    const date = new Date().toISOString().replace(/T.*$/, "");
    const product_ids = order.productsIds;
    const user_id = ctx.session.id;
    await createOrder({ date, product_ids, user_id });
    sessionStorage.removeItem("cart");
    history.replace("/history");
  }

  return (
    <MainContainer title="CART">
      {cartItems === null || cartItems.length === 0 ? (
        <NoCart>
          <img src="/img/Nocartitems.png" alt="No cart items" />
        </NoCart>
      ) : (
        <CartContainer>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              imgURL={item.image}
              name={item.name}
              price={item.price}
              updateOrder={updateOrder}
              removeFromCart={removeItem}
            />
          ))}
          <FlexContainer direction="column" marginTop="auto" gap="31px">
            <FlexContainer justify="space-between">
              <RegularM>Total</RegularM>
              <SemiBoldXL>${order.total.toFixed(2)}</SemiBoldXL>
            </FlexContainer>
            <Button onClick={completeOrder} text="Complete Order" />
          </FlexContainer>
        </CartContainer>
      )}
    </MainContainer>
  );
};
