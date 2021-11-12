import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
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
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  return (
    <DivInput>
      {children}
      <input
        id={idInput}
        name={nameInput}
        onChange={onChangeInput}
        value={valueInput}
        type={
          inputType === "email"
            ? "email"
            : isRevealPassword
            ? "text"
            : "password"
        }
        placeholder={placeholderInput}
      />
      {idInput === "password" ? (
        isRevealPassword ? (
          <FaRegEye
            className="pass-icon"
            onClick={() => setIsRevealPassword(!isRevealPassword)}
          />
        ) : (
          <FaRegEyeSlash
            className={"pass-icon"}
            onClick={() => setIsRevealPassword(!isRevealPassword)}
          />
        )
      ) : (
        <></>
      )}
    </DivInput>
  );
};

export default LoginInput;
