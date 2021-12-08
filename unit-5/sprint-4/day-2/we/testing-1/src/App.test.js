import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Button from "./components/Button"

xtest('renders learn react link', () => {
  render(<App />);
 
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();

});

 xtest("button to be in document", function () {
  const { getByText } = render(<Button label="click me" />)
  const button = getByText("click me")
  expect(button).toBeInTheDocument();
 

})

xtest("button snap", function () {
  const { container } = render(<Button label="click me" />)
  expect(container).toMatchSnapshot()
})

xtest("button clicks", function () {

const mockFunction=jest.fn()

const {container}=  render(<Button label="click" onclick={() => {
    const myElem = document.createElement("div");
    myElem.textContent = "dummy";
    document.body.appendChild(myElem)
  }} />)

  fireEvent.click(screen.getByText("click"));
  
  //test

  const melement = document.getElementById("dummy");
  expect(melement).toHaveTextContent("dummy");
  expect(melement).toBeInTheDocument()



})





xtest("button clicks function", function () {
  const mockFunction = jest.fn();

  const { container } = render(
    <Button
      label="click"
      onclick={() => 
        mockFunction()
      }
    />
  );

  fireEvent.click(screen.getByText("click"));

  //test

  expect(mockFunction).toBeCalled();
});