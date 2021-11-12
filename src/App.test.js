import { render } from "@testing-library/react";
import App from "./App";
import MainButton from "./Components/MainButton";
import HeaderWithButtons from "./Components/HeaderWithButtons";

test("renders main app component", () => {
  render(<App />);
});

test("renders main button component", () => {
  render(<MainButton />);
});

test("renders header with buttons component", () => {
  render(<HeaderWithButtons/>);
});
