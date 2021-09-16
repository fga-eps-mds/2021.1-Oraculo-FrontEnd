import { DivInput } from "./style";

const LoginInput = ({ placeholderInput, inputType, children }) => {
  return (
    <DivInput>
      {children}
      <input type={inputType} placeholder={placeholderInput} />
    </DivInput>
  );
};

export default LoginInput;
