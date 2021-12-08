import { fireEvent, render, screen } from "@testing-library/react";
import Tod from "./Tod";


test("todo in doc", function () {
  const {container}=  render(<Tod />)
    // expect(container).toBeInTheDocument()
    const input = screen.getByTestId("inputbox");
    input.textContent = "lean react";
    fireEvent.click(screen.getByTestId("addbtn"))
    // fireEvent.change(input, { target: { value: "Learn React" } });
    const h3elems = document.querySelectorAll("h3");
    expect(h3elems?.length).toBe(1)

//    expect(input.value).toBe("Learn React");
    // fireEvent.click(screen.getByTestId("addbtn"))
})