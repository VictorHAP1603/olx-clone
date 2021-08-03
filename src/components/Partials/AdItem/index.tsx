import { useMemo } from "react";
import { Link } from "react-router-dom";
import { amountFormat } from "../../../helpers/amountFormat";
import { Container } from "./style";

interface IAdItemProps {
  data: {
    title: string;
    priceNegotiable: boolean;
    price: number;
    image: string;
    className?: string;
    id: string;
  };
}

export default function AdItem({ data }: IAdItemProps) {
  const { title, price, image, className, id, priceNegotiable } = data;

  const modifyTitle = useMemo(() => {
    const titleLenght = title.split("").length;

    if (titleLenght > 25) {
      return title.split("").slice(0, 26).join("").padEnd(29, ".");
    } else {
      return title;
    }
  }, [title]);

  return (
    <Container className={className}>
      <Link to={`/ad/${id}`}>
        <div className="image">
          <img src={image} alt={title} />
        </div>

        <div className="description-item">
          <h3>{modifyTitle}</h3>
          <span>
            {!priceNegotiable ? amountFormat(price) : "Preço Negociável"}
          </span>
        </div>
      </Link>
    </Container>
  );
}
