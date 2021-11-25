import { render } from "@testing-library/react";
import { Button } from "../UI/Button";

test("Component button renders correctly",()=>{
  const TEXT = "Login"
  const { container } = render(<Button text={TEXT}/>);
  const button = container.querySelector("button");

  expect(button.textContent).toBe(TEXT);
})