import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import Logo from "../../assets/marvel.png";
import { toggleCart } from "../../slices/cart/slice";
import { Section, Title } from "./styles";

function Header() {
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(toggleCart());
  };
  return (
    <header>
      <Section>
        <Link to={"/"}>
          <img src={Logo} alt="Logo Marvel" width={120} height={100} />
        </Link>
        <ShoppingCart
          size={28}
          style={{ cursor: "pointer" }}
          onClick={openCart}
          aria-label="Abrir carrinho"
        />
      </Section>
      <Title>
        Venha conhecer e comprar as novas Histórias em Quadrinhos da Marvel
        disponível em nossa loja!
      </Title>
    </header>
  );
}

export default Header;
