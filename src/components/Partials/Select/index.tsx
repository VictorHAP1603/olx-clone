import { Container } from "./style";

import { InputHTMLAttributes } from "react";

// HTMLSelectElement
type SelectProps = InputHTMLAttributes<HTMLSelectElement>;

interface ISelectSpecificProps extends SelectProps {
  titleLabel?: string;
  arrayOptions: {
    _id: string;
    name: string;
  }[];
}

export default function Select({
  titleLabel,
  arrayOptions,
  className,
  ...rest
}: ISelectSpecificProps) {
  return (
    <Container className={className}>
      <span>{titleLabel}</span>
      <select {...rest}>
        {arrayOptions.map(({ _id, name }) => (
          <option key={_id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </Container>
  );
}
