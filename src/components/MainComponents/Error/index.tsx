import React from "react";
import { Container } from "./style";

interface IErrorProps {
  children: React.ReactNode;
}

export default function Error({ children }: IErrorProps) {
  return <Container className="field_error">{children}</Container>;
}
