import { FC, useEffect, useReducer, useState } from 'react';

import { shallowEqual, useSelector } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { StyledCardProductContainer, StyledProductLink, StyledResults, StyledSpinnerContainer } from "./Listing.style";
import { 
  productsInitialState,
  productsReducer,
  SET_PRODUCTS_TO_RENDER
} from './reducers';

import Pagination from '../components/Pagination/Pagination';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ProductCard from '../components/Product/ProductCard';
import CountProducts from '../components/CountProducts/CountProducts';
import { PAGE_INTERVAL } from '../consts/pagination';
import { BASE_URL } from '../consts/general';
import { productsSelector } from '../redux/products/products.selector';
import useFetch from '../hooks/fetch/useFetch';
import cacheImages from '../helpers/cacheImages';
import loadingSpinner from "../images/loading.svg";
import { IProduct } from '../models';

const Listing: FC = () => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(productsReducer, productsInitialState);

  const { search, pagination } = useSelector(productsSelector, shallowEqual);

  const currentPageToFetch = (pagination.currentPage - 1) * PAGE_INTERVAL;
  const { status, data, error } = useFetch(BASE_URL, PAGE_INTERVAL, currentPageToFetch, search);

  useEffect(() => {
    if (status === 'loading') setLoading(true);
  }, [status])

  useDeepCompareEffect(() => {
    const setProducts = (products: Array<IProduct>) => {
      dispatch({
        type: SET_PRODUCTS_TO_RENDER,
        payload: { products: products,  totalCount: data.total },
      })
    }

    const render = async () => {
      // Waiting for the response of the api before to preload the images
      if (!data?.products) return;
      
      setProducts(data.products)
      
      // Preload the images for the current results per page
      const allImagesPromises = await cacheImages(data.products);

      const reduxProducts = JSON.parse(JSON.stringify(state.productsToRender.products));
      const apiProducts = JSON.parse(JSON.stringify(data.products));

      /**
       * It checks if all the images are correctly cached and if the new products fetched are different from the
       * products stored previously, this is because of the case where the products fetched and the products
       * stored are the same number  
       */
      if (allImagesPromises.length !== data.products.length && reduxProducts !== apiProducts) return;

      // Remove the loading once all the images are preloaded
      if (status !== 'loading') setLoading(false);
    }

    render();
  }, [
    state,
    data,
    loading,
    status
  ])

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <>
      <StyledResults>
        <CountProducts totalCount={state.productsToRender.totalCount} />
      </StyledResults>
      {loading
        ? 
          <StyledSpinnerContainer>
            <img src={loadingSpinner} alt='loading icon' title='loading spinned' data-testid='spinner-icon' />
          </StyledSpinnerContainer> 
        :
          <section>
            <StyledCardProductContainer data-testid="listing-card-products">
              {state.productsToRender.products.map((product: IProduct) => (
                <StyledProductLink 
                  to={{ pathname: `/product/${product.id}` }}
                  state={product.id}
                  key={product.id}
                >
                  <ProductCard product={product} />
                </StyledProductLink>
              ))}
            </StyledCardProductContainer>
            <Pagination
              currentPage={pagination.currentPage}
              totalCount={state.productsToRender.totalCount}
              pageSize={PAGE_INTERVAL}
            />   
          </section> 
        }
    </> 
  )
}

export default Listing;
