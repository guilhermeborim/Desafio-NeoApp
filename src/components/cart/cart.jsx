import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateCoupon } from "../../helpers/validateCoupon";
import { removeItem, toggleCart } from "../../slices/cart/slice";
import {
  Button,
  CartItem,
  CloseButton,
  Container,
  Drawer,
  ErrorMessage,
  Input,
  ItemInfo,
  Overlay,
  RemoveButton,
  SuccessMessage,
  Thumbnail,
  Total,
} from "./styles";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [error, setError] = useState("");
  const [discount, setDiscount] = useState(0);

  const close = () => dispatch(toggleCart());

  const handleApplyCoupon = () => {
    const result = validateCoupon(coupon, items);
    if (result.isValid) {
      setAppliedCoupon(coupon.toLowerCase());
      setDiscount(result.discount);
      setError("");
    } else {
      setAppliedCoupon(null);
      setDiscount(0);
      setError(result.message);
    }
  };

  const total = useMemo(() => {
    const baseTotal = items.reduce((acc, { comic, quantity }) => {
      return acc + comic.prices[0].price * quantity;
    }, 0);
    return baseTotal * (1 - discount / 100);
  }, [items, discount]);

  return (
    <>
      <Overlay open={isOpen} onClick={close} />
      <Drawer open={isOpen}>
        <CloseButton onClick={close} aria-label="Fechar carrinho">
          ×
        </CloseButton>
        <h2>Carrinho</h2>
        {items.length === 0 && <p>Seu carrinho está vazio.</p>}
        {items.map(({ comic, quantity }) => (
          <CartItem key={comic.id}>
            <Thumbnail
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <ItemInfo>
              <h4>{comic.title}</h4>
              <p>Quantidade: {quantity}</p>
              <p>Preço: R$ {comic.prices[0].price}</p>
              <p>Raridade: {comic.isRare ? "Raro" : "Comum"}</p>
            </ItemInfo>
            <RemoveButton onClick={() => dispatch(removeItem(comic.id))}>
              Remover
            </RemoveButton>
          </CartItem>
        ))}

        {items.length > 0 && (
          <>
            <Container>
              <Input
                type="text"
                placeholder="Cupom de desconto"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <Button onClick={handleApplyCoupon}>Aplicar</Button>

              {error && <ErrorMessage>{error}</ErrorMessage>}
              {appliedCoupon && !error && (
                <SuccessMessage>
                  Cupom "{appliedCoupon}" aplicado com sucesso!
                </SuccessMessage>
              )}
            </Container>
            <Total>Total: R$ {total.toFixed(2)}</Total>
          </>
        )}
      </Drawer>
    </>
  );
}
