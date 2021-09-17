import { DivInput } from "./style";

const LoginInput = ({
  idInput,
  nameInput,
  placeholderInput,
  inputType,
  onChangeInput,
  valueInput,
  children,
}) => {
  return (
    <DivInput>
      {children}
      <input
        id={idInput}
        name={nameInput}
        type={inputType}
        onChange={onChangeInput}
        placeholder={placeholderInput}
        value={valueInput}
      />
    </DivInput>
  );
};

export default LoginInput;
