import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import SlideImages from "../../components/Partials/SlideImages";
import AdItem from "../../components/Partials/AdItem";
import { Container, Fake, OthersArea, BreadCrumb } from "./style";

import { useApi } from "../../services/api";
import { dateFormated } from "../../helpers/dateFormat";

import { amountFormat } from "../../helpers/amountFormat";

interface IUseParamsProps {
  id: string;
}

interface IAdInfoProps {
  category: {
    name: string;
    slug: string;
    _id: string;
  };
  dateCreated: string;
  description: string;
  id: string;
  images: string[];
  others?: {
    title: string;
    priceNegotiable: boolean;
    price: number;
    image: string;
    className: string;
    id: string;
  }[];
  price: number;
  priceNegotiable: boolean;
  stateName: string;
  title: string;

  userInfo: {
    name: string;
    email: string;
  };

  views: number;
}

const { getInfosAd } = useApi;

export default function AdPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [adInfo, setAdInfo] = useState<IAdInfoProps>();

  const { id } = useParams<IUseParamsProps>();

  useEffect(() => {
    const getAdInfo = async (id: string) => {
      const json = await getInfosAd(id, true);

      setAdInfo(json);
      setLoading(false);
    };

    getAdInfo(id);
  }, [id]);

  return (
    <Container className="container">
      <BreadCrumb>
        Você está aqui:
        <Link to="/">Home</Link>/
        <Link to={`/ads?state=${adInfo?.stateName}`}>{adInfo?.stateName}</Link>/
        <Link
          to={`/ads?state=${adInfo?.stateName}&cat=${adInfo?.category.slug}`}
        >
          {adInfo?.category.name}
        </Link>
        /{adInfo?.title}
      </BreadCrumb>

      <div className="ad_container">
        <div className="sideLeft">
          <div className="box">
            <div className="adImage">
              {loading && <Fake height={320} />}
              {adInfo?.images && <SlideImages images={adInfo?.images} />}
            </div>

            <div className="adInfo">
              <div className="adName">
                {loading && <Fake height={20} />}
                {adInfo?.title && <h2>{adInfo.title}</h2>}
                {adInfo?.dateCreated && (
                  <small>Criado em {dateFormated(adInfo.dateCreated)}</small>
                )}
              </div>

              <div className="adDescription">
                {loading && <Fake height={100} />}
                {adInfo?.description && <p>{adInfo.description}</p>}

                <div>
                  <hr />
                  {adInfo?.views && (
                    <small>
                      <span>{adInfo?.views} </span>
                      {adInfo?.views > 1 ? "vizualizações" : "vizualização"}
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sideRight">
          <div className="box box--padding">
            {loading && <Fake height={20} />}

            {adInfo?.priceNegotiable ? (
              "Preço Negociável"
            ) : (
              <div className="price">
                Preço: <span>{amountFormat(Number(adInfo?.price))}</span>
              </div>
            )}
          </div>
          {loading && <Fake height={50} />}

          {adInfo?.userInfo && (
            <>
              <a
                href={`mailto:${adInfo?.userInfo.email}`}
                className="contact_link"
                target="_blank"
                rel="noreferrer"
              >
                Fale com o vendedor
              </a>

              <div className="box box--padding created-by">
                <strong>{adInfo?.userInfo.name}</strong>
                <small>E-mail: {adInfo?.userInfo.email}</small>
                <small>Estado: {adInfo?.stateName}</small>
              </div>
            </>
          )}
        </div>
      </div>

      <OthersArea>
        {adInfo?.others && (
          <>
            <h2>Outras Ofertas do Vendedor</h2>

            <div className="list">
              {adInfo.others.map((i, index) => (
                <AdItem key={index} data={{ ...i, className: "adItem" }} />
              ))}
            </div>
          </>
        )}
      </OthersArea>
    </Container>
  );
}
