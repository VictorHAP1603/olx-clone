import Button from "../../components/Partials/Button";
import Select from "../../components/Partials/Select";
import { Container, SearchArea, PageArea } from "./style";

export default function Home() {
  return (
    <>
      <SearchArea>
        <Container className="container">
          <div className="searchBox">
            <form method="get" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state" id=""></select>

              <Button>Pesquisar</Button>
            </form>
          </div>
          <div className="categoryList"></div>
        </Container>
      </SearchArea>

      <PageArea></PageArea>
    </>
  );
}
