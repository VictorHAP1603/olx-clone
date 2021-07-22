import { useEffect, useState } from "react";
import { useApi } from "../../services/api";

import Button from "../../components/Partials/Button";
import Select from "../../components/Partials/Select";
import Input from "../../components/Partials/Input";

import { Container, SearchArea, PageArea } from "./style";
import CategoryItem from "../../components/Partials/CategoryItem";
import AdItem from "../../components/Partials/AdItem";
import { Link } from "react-router-dom";

interface IStateListProps {
  _id: string;
  name: string;
}

interface ICategoryListProps {
  _id: string;
  name: string;
  slug: string;
  img: string;
}

interface IAdsListProps {
  id: string;
  title: string;
  price: number;
  priceNegotiable: boolean;
  image: string;
}

const { getStates, getCategories, getRecentAds } = useApi;

export default function Home() {
  const [stateList, setStateList] = useState<IStateListProps[]>([]);
  const [categoryList, setCategoryList] = useState<ICategoryListProps[]>([]);
  const [adsList, setAdsList] = useState<IAdsListProps[]>([]);

  useEffect(() => {
    const getStatesList = async () => {
      const list = await getStates();
      setStateList(list);
    };

    getStatesList();
  }, []);

  useEffect(() => {
    const getCategoryList = async () => {
      const list = await getCategories();
      setCategoryList(list);
    };

    getCategoryList();
  }, []);

  useEffect(() => {
    const getRecentAdsList = async () => {
      const list = await getRecentAds({
        sort: "desc",
        limit: 8,
      });
      setAdsList(list.ads);
    };

    getRecentAdsList();
  }, []);

  return (
    <>
      <SearchArea>
        <Container className="container">
          <div className="searchBox">
            <form method="get" action="/ads">
              <Input
                className="input_label"
                type="text"
                name="q"
                placeholder="O que você procura?"
              />
              <Select
                className="select_label"
                name="state"
                arrayOptions={stateList}
              />
              <Button>Pesquisar</Button>
            </form>
          </div>
          <div className="categoryList">
            {categoryList &&
              categoryList.map(({ _id, img, name, slug }) => (
                <CategoryItem
                  key={_id}
                  to={`/ads?cat=${slug}`}
                  className="categoryitem"
                  img={img}
                  name={name}
                  slug={slug}
                />
              ))}
          </div>
        </Container>
      </SearchArea>

      <PageArea className="container">
        <h2>Anúncios Recentes</h2>
        <div className="list-ads">
          {adsList.map(({ id, title, priceNegotiable, price, image }) => (
            <AdItem
              title={title}
              id={id}
              priceNegotiable={priceNegotiable}
              price={price}
              image={image}
              className="category-item"
              key={id}
            />
          ))}
        </div>
        <Link to="/ads" className="seAllLink">
          Ver Todos
        </Link>
        <hr />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          repellat voluptatibus laborum ipsa, perspiciatis aut, ab, fugiat
          molestiae dolorem ipsum iste. Explicabo quod laborum nobis, repellat
          natus laboriosam officia ducimus. Tenetur aspernatur quo dolor sequi
          magnam iure id dolore explicabo. Odit voluptatem maiores incidunt
          cumque quasi atque ad! Exercitationem totam hic rem, fuga saepe vel.
          Odit veniam debitis quidem voluptates. Maiores incidunt aut est
          veritatis repellat voluptates sit, quae ratione sunt, eum at sequi
          magnam sint pariatur saepe fugiat dolorem quidem officiis consequatur
          odio maxime rerum. Sunt ab aperiam repellendus! Placeat dolor numquam
          unde possimus. Obcaecati praesentium voluptatum numquam sapiente fuga.
          Quam distinctio necessitatibus sint temporibus inventore ipsum ut
          magnam voluptatum doloremque fuga, praesentium et vel fugit quaerat
        </p>
      </PageArea>
    </>
  );
}
