import { FC, SyntheticEvent } from 'react'

import { 
  StyledProductImage,
  StyledProductImageContainer,
  StyledProductTitle,
  StyledCardButton,
  StyledCartIcon,
  StyledCardDescription,
  StyledCardTextPrice,
  StyledProductCard,
} from "./ProductCard.style";


import { IProduct } from '../../models';

import ProductCardRating from './ProductCardRating';
import { useAppDispatch } from '../../redux/store';
import { addCartItem } from '../../redux/products/products.slice';

export interface IProductCardProps {
  product: IProduct
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { id, title, thumbnail, description, price, discountPercentage, rating } = product;

  const dispatch = useAppDispatch();
  
  // price without discount
  const realPrice = Math.ceil(price / discountPercentage) + price;

  const addTocart = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addCartItem({
      price: price,
      product: {
        title,
        id,
      }
    }));
  }
  
  return (
    <StyledProductCard data-testid={`card-product-${title.toLowerCase().replaceAll(' ', '-')}`}>
      <ProductCardRating rating={rating} />
      <StyledProductImageContainer>
        <StyledProductImage src={thumbnail} title={title} alt={`${title} image`} />
      </StyledProductImageContainer>
      <StyledProductTitle data-testid="card-product-title">
        <strong>#{id} - {title}</strong>
      </StyledProductTitle>
      <StyledCardDescription>{description}</StyledCardDescription>
      <StyledCardTextPrice><span>${price}</span> - <span>${realPrice}</span></StyledCardTextPrice>
      <StyledCardButton onClick={addTocart}>
        <span>Add to cart</span>
        <StyledCartIcon />
      </StyledCardButton>
    </StyledProductCard>
  )
}

export default ProductCard;
