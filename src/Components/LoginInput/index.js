import { DivInput } from "./style";

const LoginInput = ({
  idInput,
  nameInput,
  valueInput,
  onChangeInput,
  placeholderInput,
  inputType,
  children,
}) => {
  return (
    <DivInput>
      {children}
      <input
        id={idInput}
        name={nameInput}
        onChange={onChangeInput}
        value={valueInput}
        type={inputType}
        placeholder={placeholderInput}
      />
    </DivInput>
  );
};

export default LoginInput;
