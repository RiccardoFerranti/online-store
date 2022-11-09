import { FC } from 'react';

import { AiOutlineStar } from 'react-icons/ai';

import { 
  StarIconContainer,
  StarIconEmptyFilledContainer,
  StarIconFilled,
  StyledProductRating
} from './ProductCardRating.style';

export interface IProductCardRatingProps {
  totalStars?: number,
  emptyIcon?: React.ElementType,
  filledIcon?: React.ElementType
  rating: number
}

const ProductCardRating: FC<IProductCardRatingProps> = props => {
  const { totalStars = 5, emptyIcon = AiOutlineStar, filledIcon = StarIconFilled, rating } = props;
  const EmptyIcon = emptyIcon;
  const FilledIcon = filledIcon;

  return (
    <StyledProductRating data-testid='product-rating'>
      {[...new Array(totalStars)].map((arr, index) => {
        const activeStateStar = rating || -1;

        const showEmptyIcon = activeStateStar === -1 || activeStateStar < index + 1;

        const isActiveRating = activeStateStar !== 1;
        const isRatingWithPrecision = activeStateStar % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeStateStar) === index + 1;
        const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

        return (
          <div style={{ position: 'relative', cursor: 'pointer' }} key={index}>
            <StarIconContainer starWidth={showRatingWithPrecision ? `${(activeStateStar % 1) * 100}%` : '0%'} >
              <FilledIcon />
            </StarIconContainer>
            <StarIconEmptyFilledContainer>
              {showEmptyIcon ? <EmptyIcon /> : <FilledIcon />}
            </StarIconEmptyFilledContainer>
          </div>
        );
      })}
    </StyledProductRating>
  );
};

export default ProductCardRating;
