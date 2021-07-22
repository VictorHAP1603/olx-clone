import { Container } from "./style";
import { useParams } from "react-router-dom";
import { useApi } from "../../services/api";
import { useState } from "react";

interface IUseParamsProps {
  id: string;
}

export default function AdPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [adInfo, setAdInfo] = useState([]);

  const {} = useApi;
  const { id } = useParams<IUseParamsProps>();

  return (
    <Container className="container">
      <div className="ad_container">
        <div className="sideLeft"></div>
        <div className="sideRight"></div>
      </div>
    </Container>
  );
}
