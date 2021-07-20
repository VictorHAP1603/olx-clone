import React, { useState } from "react";

import { Container, PageArea } from "./style";
import { useApi } from "../../services/api";

export default function SignIn() {
  const { signIn } = useApi;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setDisabled(true);
  }

  return (
    <Container className="container">
      <h1>Login</h1>
      <PageArea>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <span>E-mail</span>
              <input type="email" disabled={disabled} />
            </label>

            <label>
              <span>Senha</span>
              <input type="password" disabled={disabled} />
            </label>

            <label className="check">
              <span>Lembrar senha</span>
              <input type="checkbox" />
            </label>

            <button type="submit" disabled={disabled}>
              Entrar
            </button>
          </div>
        </form>
      </PageArea>
    </Container>
  );
}
