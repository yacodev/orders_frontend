import renderer from "react-test-renderer";
import CartItem from "../CartItem";

describe("CartItem", () => {
  it("renders correctly CartItem", () => {
    const image =
      "https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg";
    const name = "green cream";
    const price = "4513";
    const tree = renderer
      .create(<CartItem imgURL={image} name={name} price={price} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});