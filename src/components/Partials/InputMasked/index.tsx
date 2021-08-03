import { InputHTMLAttributes } from "react";
import { Container } from "./style";

import { createNumberMask } from "text-mask-addons";
import MaskedInput from "react-text-mask";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface IMaskedInputProps extends InputProps {
  titleLabel: string;
  disabled: boolean;
}

export default function InputMasked({
  titleLabel,
  disabled,
  onChange,
  value,
}: IMaskedInputProps) {
  const priceMask = createNumberMask({
    prefix: "R$ ",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
  });

  return (
    <Container>
      <span>{titleLabel}</span>
      <MaskedInput
        onChange={onChange}
        value={value}
        mask={priceMask}
        placeholder="R$ "
        disabled={disabled}
      />
    </Container>
  );
}
