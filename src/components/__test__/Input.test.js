import { render } from "@testing-library/react"
import {Input} from "../UI/Input"

test("Component Input renders correctly",()=>{
  const LABEL = "label"
  const { container} = render(<Input label={LABEL}/>);
  const label = container.querySelector("label")

  expect(label.textContent).toBe(LABEL)
})