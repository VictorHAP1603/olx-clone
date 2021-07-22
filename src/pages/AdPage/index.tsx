import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SlideImages from "../../components/Partials/SlideImages";

import { useApi } from "../../services/api";
import { dateFormated } from "../../helpers/dateFormat";

import { Container, Fake } from "./style";

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
  // others:
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
      <div className="ad_container">
        <div className="sideLeft">
          <div className="box">
            <div className="adImage">
              {loading && <Fake height={300} />}
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

        <div className="sideRight">
          <div className="box box--padding">
            {loading && <Fake height={20} />}
          </div>
          <div className="box box--padding">
            {loading && <Fake height={50} />}
          </div>
        </div>
      </div>
    </Container>
  );
}
