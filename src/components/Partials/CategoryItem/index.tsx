import { Link } from "react-router-dom";
import { Container } from "./style";

interface ICategoryItemProps {
  img: string;
  name: string;
  slug: string;
  className: string;
  to: string;
}

function CategoryItem({ slug, name, img, className, to }: ICategoryItemProps) {
  return (
    <Container className={className}>
      <Link to={to}>
        <img src={img} alt={slug} />
        <span>{name}</span>
      </Link>
    </Container>
  );
}

export default CategoryItem;
