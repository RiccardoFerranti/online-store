import { FC } from "react";

import {
  StyledAmountSummary,
  StyledBinIcon,
  StyledCartSummary,
  StyledCartSummaryButton,
  StyledCartSummaryProduct,
  StyledEmptySummary
} from "./CartSummary.style";

import { IResourceBase } from "../../models";

interface ICartProduct extends IResourceBase {
  price: number,
  count: number,
}

export interface ICartSummaryProps {
  products: Array<ICartProduct>,
  handleDeleteProduct: (e: any, id: number, price: number) => void
}

const CartSummary: FC<ICartSummaryProps> = ({ products, handleDeleteProduct, }) => (
  <StyledCartSummary onClick={(e) => { e.stopPropagation()}} data-testid='products-cart-summary'>
    {products.length 
      ? <> 
          {products.map((product) => (
            <StyledCartSummaryProduct key={`${product.count}-${product.id}`} data-testid={`product-cart-summary-${product.id}`}>
              <StyledAmountSummary>{product.count}</StyledAmountSummary>
              <span>{product.title}</span>
              <StyledBinIcon onClick={(e) => { handleDeleteProduct(e, product.id, product.price)}} data-testid='products-cart-summary-bin-icon' />
            </StyledCartSummaryProduct>
          ))}
          <StyledCartSummaryButton>Checkout</StyledCartSummaryButton>
        </>
      : <StyledEmptySummary>-- empty --</StyledEmptySummary>
    }
  </StyledCartSummary>
)

export default CartSummary;
