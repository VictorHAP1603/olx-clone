import React, { useState, useEffect } from "react";

import { Container, PageArea } from "./style";

import { useAuth } from "../../hooks/useAuth";
import { useApi } from "../../services/api";

import Error from "../../components/MainComponents/Error";
import Input from "../../components/Partials/Input";
import Button from "../../components/Partials/Button";
import Select from "../../components/Partials/Select";

interface IStateList {
  _id: string;
  name: string;
}

export default function SignUp() {
  const { getStates, register } = useApi;
  const { doLogin } = useAuth();

  const [name, setName] = useState<string>("");
  const [locationState, setLocationState] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPasword] = useState<string>("");

  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [statesList, setStatesList] = useState<IStateList[]>([]);

  useEffect(() => {
    const getStatesList = async () => {
      const list = await getStates();
      setStatesList(list.states);
    };

    getStatesList();
  }, [getStates]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setDisabled(true);
    setError("");

    const json = await register(name, email, password, locationState);
    setDisabled(false);

    if (password !== confirmPassword) {
      setError("Senhas não batem");
      return;
    }

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, false);
      window.location.href = "/";
    }
  }

  return (
    <Container className="container">
      <h1>Cadastro</h1>
      <PageArea>
        {error && <Error>{error}</Error>}
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={disabled}
            >
              Nome Completo
            </Input>

            <Select
              arrayOptions={statesList}
              titleLabel="Seu Estado"
              required
              value={locationState}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setLocationState(e.target.value);
              }}
              disabled={disabled}
            />

            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabled}
            >
              E-mail
            </Input>

            <Input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disabled}
            >
              Senha
            </Input>

            <Input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPasword(e.target.value)}
              disabled={disabled}
            >
              Confirmar senha
            </Input>

            <Button type="submit" disabled={disabled}>
              Cadastrar
            </Button>
          </div>
        </form>
      </PageArea>
    </Container>
  );
}
