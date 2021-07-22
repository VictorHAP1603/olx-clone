import React, { useState } from "react";

import { Container, PageArea } from "./style";

import { useAuth } from "../../hooks/useAuth";
import { useApi } from "../../services/api";

import Error from "../../components/MainComponents/Error";
import Input from "../../components/Partials/Input";
import Button from "../../components/Partials/Button";

const { signIn } = useApi;

export default function SignIn() {
  const { doLogin } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setDisabled(true);
    setError("");

    const json = await signIn(email, password);
    setDisabled(false);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, checkbox);
      window.location.href = "/";
    }
  }

  return (
    <Container className="container">
      <h1>Login</h1>
      <PageArea>
        {error && <Error>{error}</Error>}
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              titleLabel="E-mail"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabled}
            />

            <Input
              titleLabel="Senha"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disabled}
              seePassword={true}
            />

            <Input
              titleLabel="Lembrar senha"
              className="check"
              type="checkbox"
              checked={checkbox}
              onChange={(e) => setCheckbox(!checkbox)}
            />

            <Button type="submit" disabled={disabled}>
              Entrar
            </Button>
          </div>
        </form>
      </PageArea>
    </Container>
  );
}
