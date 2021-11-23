import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Image } from "./UI/Image";
import { SemiBoldL } from "./UI/Typography";

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1); 
  border-radius: 30px;
  width: 156px;
  height: 212px;
  display: inline-block;
  gap: 3px; 
  padding:13px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default function ProductCard(props) {
  console.log(props.picture_url);
  return (
    <Link to={`/products/${props.id}`}>
      <Card>
        <div style={{"marginTop": "-56px"}}>
          <Image src={props.picture_url} alt="" size="md" />
        </div>
        <SemiBoldL color="#333333">{props.dish}</SemiBoldL>
        <SemiBoldL color="#FA4A0C">${props.price/100}</SemiBoldL>
      </Card>      
    </Link>
  );
}
