import { Link } from "react-router-dom";

import { Container } from "./style";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AuthActionCreator, State } from "../../../store";

// import LogoImg from "../../../assets/menu-button.png";

export default function Header() {
  const dispatch = useDispatch();
  const { isLoggedVerification } = bindActionCreators(
    AuthActionCreator,
    dispatch
  );

  const { isLogged } = useSelector((state: State) => state.auth);

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
                <Link to="">Poste um anúncio</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="">Login</Link>
                </li>

                <li>
                  <Link to="">Cadastrar</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </Container>
  );
}
