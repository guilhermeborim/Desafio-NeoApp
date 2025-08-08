import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Logo from "../../assets/marvel.png";
import { toggleCart } from "../../slices/cart/slice";
import { Badge, ButtonWrapper, Section, Title } from "./styles";

function Header() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const openCart = () => {
    dispatch(toggleCart());
  };

  return (
    <header>
      <Section>
        <Link to={"/"}>
          <img src={Logo} alt="Logo Marvel" width={120} height={100} />
        </Link>
        <ButtonWrapper onClick={() => openCart()}>
          <ShoppingCart
            size={28}
            style={{ cursor: "pointer" }}
            aria-label="Abrir carrinho"
          />
          {totalItems > 0 && <Badge>{totalItems}</Badge>}
        </ButtonWrapper>
      </Section>
      <Title>
        Venha conhecer e comprar as novas Histórias em Quadrinhos da Marvel
        disponível em nossa loja!
      </Title>
    </header>
  );
}

export default Header;
