import { Container } from "./style";

import { InputHTMLAttributes, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface IInput extends InputProps {
  titleLabel: string;
  seePassword?: boolean;
}

export default function Input({
  titleLabel,
  seePassword,
  className,
  children,
  ...rest
}: IInput) {
  const [icon, setIcon] = useState<boolean>(true);
  const [type, setType] = useState<string>("password");

  function handleInput() {
    setIcon(!icon);

    icon ? setType("text") : setType("password");
  }

  return (
    <Container className={className}>
      <span>{titleLabel}</span>
      {!seePassword ? (
        <input {...rest} />
      ) : (
        <div className="see-icon">
          <input {...rest} type={type} />
          <div className="icon" onClick={() => handleInput()}>
            {icon ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>
      )}
    </Container>
  );
}
