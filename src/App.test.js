import { render } from "@testing-library/react";
import App from "./App";
import MainButton from "./Components/MainButton";

test("renders main app component", () => {
  render(<App />);
});

test("renders main button component", () => {
  render(<MainButton/>
});
