import { useNavigate } from "react-router";
import { getThumbnailUrl } from "../../helpers/thumbnailUrlComics";
import { ComicCard, ComicImage, GridContainer, RareTag } from "./style";

export default function ComicsList({ comics }) {
  const navigate = useNavigate();

  const handleClick = (comicId) => {
    navigate(`/comic/${comicId}`);
  };

  return (
    <GridContainer>
      {comics.map((comic) => (
        <ComicCard key={comic.id} onClick={() => handleClick(comic.id)}>
          {comic.isRare && <RareTag>RARO</RareTag>}
          <ComicImage
            src={getThumbnailUrl(comic.thumbnail)}
            alt={comic.title}
          />
          <h3>{comic.title}</h3>
          <h>R${comic.prices[0].price}</h>
        </ComicCard>
      ))}
    </GridContainer>
  );
}
