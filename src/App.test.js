import { render } from "@testing-library/react";
import App from "./App";
import MainButton from "./Components/MainButton";
import HeaderWithButtons from "./Components/HeaderWithButtons";
import BigBlueRectangle from "./Components/BigBlueRectangle";
import BigWhiteRectangle from "./Components/BigWhiteRectangle";
import DropDownbutton from "./Components/DropDownButton";
import FieldsGroup from "./Components/FieldsGroup";
import FilterButton from "./Components/FilterButton";
import GenericBlueButton from "./Components/GenericBlueButton";
import GenericRedButton from "./Components/GenericRedButton";
import GenericWhiteButton from "./Components/GenericWhiteButton";
import LoginInput from "./Components/LoginInput";
import SearchBar from "./Components/SearchBar";

import AllDepartmentsScreen from "./Pages/AllDepartmentsScreen";
import AllRegistersScreen from "./Pages/AllRegistersScreen";
import ChangePassword from "./Pages/ChangePassword";
import CreateDepartment from "./Pages/CreateDepartment";
import CreateRecord from "./Pages/CreateRecord";
import CreateUser from "./Pages/CreateUser";
import HomePage from "./Pages/HomePage";
import RegistrationScreen from "./Pages/RegistrationScreen";
import ViewAllFields from "./Pages/ViewAllFields";
import ViewAllTags from "./Pages/ViewAllTags";
import ViewAllUsers from "./Pages/ViewAllUsers";

test("renders AllDepartmentsScreen component", () => {
  render(<AllDepartmentsScreen />);
});

test("renders AllRegistersScreen component", () => {
  render(<AllRegistersScreen />);
});

test("renders ChangePassword component", () => {
  render(<ChangePassword />);
});

test("renders CreateDepartment component", () => {
  render(<CreateDepartment />);
});

test("renders CreateRecord component", () => {
  render(<CreateRecord />);
});

test("renders CreateUser component", () => {
  render(<CreateUser />);
});

test("renders HomePage component", () => {
  render(<HomePage />);
});

test("renders RegistrationScreen component", () => {
  render(<RegistrationScreen />);
});

test("renders ViewAllFields component", () => {
  render(<ViewAllFields />);
});

test("renders ViewAllTags component", () => {
  render(<ViewAllTags />);
});

test("renders ViewAllUsers component", () => {
  render(<ViewAllUsers />);
});

test("renders BigBlueRectangle component", () => {
  render(<BigBlueRectangle />);
});

test("renders BigWhiteRectangle component", () => {
  render(<BigWhiteRectangle />);
});

test("renders DropDownbutton component", () => {
  render(<DropDownbutton />);
});

test("renders FieldsGroup component", () => {
  render(<FieldsGroup />);
});

test("renders FilterButton component", () => {
  render(<FilterButton />);
});

test("renders GenericBlueButton component", () => {
  render(<GenericBlueButton />);
});

test("renders GenericRedButton component", () => {
  render(<GenericRedButton />);
});

test("renders GenericWhiteButton component", () => {
  render(<GenericWhiteButton />);
});

test("renders LoginInput component", () => {
  render(<LoginInput />);
});

test("renders SearchBar component", () => {
  render(<SearchBar />);
});

test("renders main app component", () => {
  render(<App />);
});

test("renders main button component", () => {
  render(<MainButton />);
});

test("renders header with buttons component", () => {
  render(<HeaderWithButtons />);
});
