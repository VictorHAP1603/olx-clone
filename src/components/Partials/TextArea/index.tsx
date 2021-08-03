import { Container } from "./style";

import { TextareaHTMLAttributes } from "react";

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface IInput extends InputProps {
  titleLabel?: string;
}

export default function TextArea({
  titleLabel,
  className,
  children,
  ...rest
}: IInput) {
  return (
    <Container className={className}>
      {titleLabel && <span>{titleLabel}</span>}
      <textarea {...rest}></textarea>
    </Container>
  );
}
