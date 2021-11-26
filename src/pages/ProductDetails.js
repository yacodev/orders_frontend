import styled from "@emotion/styled";
import { useHistory, useParams } from "react-router";

import MainContainer from "../components/MainContainer";
import { Image } from "../components/UI/Image";
import { Button } from "../components/UI/Button";
import { RegularS, SemiBoldM, SemiBoldXL } from "../components/UI/Typography";
import capitalize from "../utils/capitalizeString";

const StyledDiv = styled.div`
  height: 100%;
  margin-top: 19px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FlexColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  text-align: ${(props) => props.textAlign};
`;

const StyledButton = styled(Button)`
  margin-top: auto;
`;

export const ProductDetails = () => {
  const { id } = useParams();
  const data = JSON.parse(sessionStorage.getItem("products")).find(
    (product) => product.id === parseInt(id)
  );

  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const history = useHistory();

  function addToCart() {
    sessionStorage.setItem("cart", JSON.stringify([...cart, data.id]));
    history.push("/cart");
  }

  return (
    <MainContainer title="DETAILS ">
      <StyledDiv>
        <Image src={data.image} alt="dish imagen" size="lg" />
        <FlexColumnContainer gap="27px">
          <FlexColumnContainer gap="10px" textAlign="center">
            <SemiBoldXL>{capitalize(data.name)}</SemiBoldXL>
            <SemiBoldXL color="#FA4A0C">${data.price / 100}</SemiBoldXL>
          </FlexColumnContainer>
          <FlexColumnContainer gap="4px">
            <SemiBoldM>Description</SemiBoldM>
            <RegularS>{data.description}</RegularS>
          </FlexColumnContainer>
        </FlexColumnContainer>
        <StyledButton
          onClick={addToCart}
          text={cart.includes(data.id) ? "Already in the Cart" : "Add to Cart"}
          disabled={cart.includes(data.id)}
        />
      </StyledDiv>
    </MainContainer>
  );
};
