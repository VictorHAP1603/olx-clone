import { Link } from "react-router-dom";
import { Container } from "./style";

export default function NotFound() {
  return (
    <Container>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para home</Link>
    </Container>
  );
}
