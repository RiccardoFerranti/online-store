import { ChangeEvent, FC, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { StyledAmountCart, StyledCart, StyledCartContainer } from "./Cart.style";
import CartSummary from "./CartSummary";

import { StyledCartIcon } from "../Product/ProductCard.style";

import { productsSelector } from "../../redux/products/products.selector";
import { deleteCartItem } from "../../redux/products/products.slice";
import { useAppDispatch } from "../../redux/store";
import useClickAway from "../../hooks/useClickAway";

const Cart: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useAppDispatch();

  useClickAway(setIsOpen, isOpen, ref)

  const { cart } = useSelector(productsSelector, shallowEqual);

  const openSummaryModal = () => {
    setIsOpen(!isOpen);
  }

  const deleteProduct = (e: ChangeEvent<HTMLElement>, id: number, price: number) => {
    dispatch(deleteCartItem({ id, price }));
  }

  return (
    <StyledCart ref={ref} onClick={openSummaryModal} data-testid='products-cart'>
      <StyledCartContainer>
        <StyledAmountCart data-testid='products-cart-amount'>{cart.amount}</StyledAmountCart>
        <StyledCartIcon />
        <p>$ {cart.price}</p>
      </StyledCartContainer>
      {isOpen ? <CartSummary products={cart.products} handleDeleteProduct={deleteProduct} /> : null}
    </StyledCart>
  )
}

export default Cart;
