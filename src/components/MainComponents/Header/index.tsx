import { Link } from "react-router-dom";

import { Container } from "./style";

import { useAuth } from "../../../hooks/useAuth";

export default function Header() {
  const { isLogged, doLogout } = useAuth();

  return (
    <Container>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">L</span>
            <span className="logo-3">X</span>
          </Link>
        </div>

        <nav>
          <ul>
            {isLogged() ? (
              <>
                <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>

                <li>
                  <button onClick={doLogout}>Sair</button>
                </li>

                <li className="button">
                  <Link to="/post-an-ad">Poste um anúncio</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>

                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>

                <li className="button">
                  <Link to="/signin">Poste um anúncio</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </Container>
  );
}
