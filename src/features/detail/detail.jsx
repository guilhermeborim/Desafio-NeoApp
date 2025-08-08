import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import CartDrawer from "../../components/cart/cart";
import { addItem, toggleCart } from "../../slices/cart/slice";
import {
  BuyButton,
  ComicImage,
  ComicInfo,
  Description,
  DetailContainer,
  RareTag,
  Title,
} from "./styles";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const comic = useSelector((state) =>
    state.comics.items.find((c) => String(c.id) === id)
  );

  if (!comic) return Navigate({ to: "/" });

  const handleBuy = () => {
    dispatch(addItem(comic));
    dispatch(toggleCart());
  };

  return (
    <>
      <CartDrawer />
      <DetailContainer>
        <ComicImage
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
        <ComicInfo>
          {comic.isRare && <RareTag>Raro</RareTag>}
          <Title>{comic.title}</Title>
          <Description>
            {comic.description || "Sem descrição disponível."}
          </Description>
          <BuyButton onClick={handleBuy}>
            Comprar - R$ {comic.prices[0].price}
          </BuyButton>
        </ComicInfo>
      </DetailContainer>
    </>
  );
}

export default Detail;
