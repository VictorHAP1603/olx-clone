import { Container } from "./style";

import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ children, className, ...rest }: InputProps) {
  return (
    <Container className={className}>
      <span>{children}</span>
      <input {...rest} />
    </Container>
  );
}
