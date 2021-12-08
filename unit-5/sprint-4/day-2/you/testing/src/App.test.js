import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

 test("Inc by five", () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  const [add] = getAllByTestId("button");
  const counter = getByTestId("counter");
  fireEvent.click(add);
  expect(counter).toHaveTextContent(5);
});

test("Dec by five", () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  const [add, sub] = getAllByTestId("button");
  const counter = getByTestId("counter");
  fireEvent.click(sub);
  expect(counter).toHaveTextContent(-5);
});