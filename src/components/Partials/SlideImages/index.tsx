import { Container } from "./style";

interface ISlideImagesProps {
  images: string[];
}

export default function SlideImages({ images }: ISlideImagesProps) {
  const array = [
    "http://alunos.b7web.com.br:501/media/09194fa5-7f68-4193-9a39-b93d57954bcc.jpg",
    "http://alunos.b7web.com.br:501/media/09194fa5-7f68-4193-9a39-b93d57954bcc.jpg",
  ];

  return (
    <Container>
      {array.map((src, index) => (
        <div className="img-item">
          <img key={index + Math.random()} src={src} alt="Imagem do produto" />
        </div>
      ))}
    </Container>
  );
}
