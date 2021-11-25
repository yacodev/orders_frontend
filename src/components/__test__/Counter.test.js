import renderer from "react-test-renderer";
import { Counter } from "../UI/Counter";

describe("Counter", () => {
  it("renders correctly", () => {
    const count = 1;
    const setCount = () => {};
    const tree = renderer
      .create(<Counter count={count} updateCount={setCount} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
