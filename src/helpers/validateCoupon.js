export function validateCoupon(code, cartItems) {
  const normalizedCode = code.toLowerCase();
  const validCoupons = ["raro10", "comum20"];

  if (!validCoupons.includes(normalizedCode)) {
    return { isValid: false, message: "Cupom inválido." };
  }

  const isRareCoupon = normalizedCode === "raro10";
  const isCommonCoupon = normalizedCode === "comum20";

  const allItemsAreRare = cartItems.every((item) => item.comic.isRare === true);

  const allItemsAreCommon = cartItems.every(
    (item) => item.comic.isRare === false
  );

  if (isRareCoupon && allItemsAreRare) {
    return { isValid: true, discount: 10 };
  }

  if (isCommonCoupon && allItemsAreCommon) {
    return { isValid: true, discount: 20 };
  }

  return {
    isValid: false,
    message: isRareCoupon
      ? "O cupom RARO10 só pode ser usado em itens raros."
      : "O cupom COMUM20 só pode ser usado em itens comuns.",
  };
}
