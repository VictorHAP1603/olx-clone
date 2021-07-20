import { Container } from "./style";

import { ChangeEventHandler } from "react";

interface iSelectProps {
  titleLabel: string;
  value: string;
  onChange: ChangeEventHandler;
  required: boolean;
  disabled: boolean;

  arrayOptions: {
    _id: string;
    name: string;
  }[];
}

export default function Select({
  titleLabel,
  arrayOptions,
  ...rest
}: iSelectProps) {
  return (
    <Container>
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
