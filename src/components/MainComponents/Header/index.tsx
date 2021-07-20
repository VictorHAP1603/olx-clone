import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

// import LogoImg from "../../../assets/menu-button.png";

export default function Header() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

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
            {isLogged ? (
              <li className="button">
                <Link to="/post-an-ad">Poste um anúncio</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>

                <li>
                  <Link to="/cadastro">Cadastrar</Link>
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
