import { Container } from "./style";

import { ButtonHTMLAttributes } from "react";

type InputProps = ButtonHTMLAttributes<HTMLInputElement>;

export default function Button({ children, ...rest }: InputProps) {
  return <Container>{children}</Container>;
}
