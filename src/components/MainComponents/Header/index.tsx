import { Link } from "react-router-dom";

import { Container } from "./style";
// import LogoImg from "../../../assets/menu-button.png";

export default function Header() {
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
            <li>
              <Link to="">Login</Link>
            </li>

            <li>
              <Link to="">Cadastrar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
