import styled from "@emotion/styled";
import PropTypes from "prop-types";

const IMAGE_SIZES = {
  sm: "62px",
  md: "130px",
  lg: "241px",
};

export const Image = styled.img`
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);

  border-radius: 50%;
  width: ${(props) => IMAGE_SIZES[props.size] || IMAGE_SIZES.md};
  height: ${(props) => IMAGE_SIZES[props.size] || IMAGE_SIZES.md};
  object-fit: cover;
`;

Image.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
