import React, { useEffect, useRef, useState } from "react";

import { Container, PageArea } from "./style";

import { useAuth } from "../../hooks/useAuth";
import { useApi } from "../../services/api";

import Error from "../../components/MainComponents/Error";
import Input from "../../components/Partials/Input";
import Button from "../../components/Partials/Button";
import Select from "../../components/Partials/Select";
import TextArea from "../../components/Partials/TextArea";
import InputMasked from "../../components/Partials/InputMasked";
import { Redirect, useHistory } from "react-router-dom";

interface ICategoryListProps {
  _id: string;
  name: string;
  slug: string;
  img: string;
}
const { getCategories, postAddAd } = useApi;

export default function AddAd() {
  let history = useHistory();

  const fileField = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState<ICategoryListProps[]>([]);

  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [description, setDescription] = useState("");

  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getCategoryList = async () => {
      const list = await getCategories();
      setCategoryList(list);
    };

    getCategoryList();
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setDisabled(true);
    setError("");

    let errors = [];

    if (!title.trim()) {
      errors.push("Sem Título");
    }

    if (!category) {
      errors.push("Sem Categoria");
    }

    if (errors.length === 0) {
      const fData = new FormData();

      fData.append("title", title);
      fData.append("price", price);
      fData.append("priceneg", String(priceNegotiable));
      fData.append("desc", description);
      fData.append("cat", category);

      if (fileField.current?.files && fileField.current.files?.length !== 0) {
        for (let i = 0; i < fileField.current.files.length; i++) {
          fData.append("img", fileField.current.files[i]);
        }
      }

      const json = await postAddAd(fData);

      if (!json.error) {
        console.log("chegou aq");
        history.push(`/ad/${json.id}`);

        return;
      } else {
        setError(json.error);
      }
    } else {
      setError(errors.join("\n"));
    }

    setDisabled(false);
  }

  return (
    <Container className="container">
      <h1>Poste um Anúncio</h1>
      <PageArea>
        {error && <Error>{error}</Error>}
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              titleLabel="Título"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={disabled}
              name="title"
            />

            <Select
              titleLabel="Categoria"
              arrayOptions={categoryList}
              value={category}
              disabled={disabled}
              required
              onChange={(e) => setCategory(e.target.value)}
              name="cat"
            />

            <InputMasked
              titleLabel="Preço"
              disabled={!priceNegotiable ? false : true}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
            />

            <Input
              titleLabel="Preço Negociável ?"
              className="check"
              type="checkbox"
              checked={priceNegotiable}
              onChange={(e) => setPriceNegotiable(!priceNegotiable)}
              name="priceneg"
            />

            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea_label"
              titleLabel="Descrição"
              name="desc"
            />

            <label>
              <span>Imagens (1 ou mais)</span>
              <input
                type="file"
                multiple
                required
                disabled={disabled}
                ref={fileField}
              />
            </label>

            <Button type="submit" disabled={disabled}>
              Adicionar Anúncio
            </Button>
          </div>
        </form>
      </PageArea>
    </Container>
  );
}
