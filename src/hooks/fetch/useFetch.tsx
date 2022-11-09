import { useEffect, useRef, useReducer } from 'react';
import { TDictionary } from '../../commonTypes';
import {
	FETCHED,
	FETCH_ERROR,
	LOADING,
	productsApiInitialState,
	productsApiReducer
} from './reducers';

const buildUrl = (baseUrl: string, limit?: number, skip?: number, query?: string): string | undefined => {
  let url;
	
	if (limit && typeof skip !== 'undefined') {
		url = `${baseUrl}?limit=${limit}&skip=${skip}`;
		
		if (query?.length) {
			url = `${baseUrl}/search?q=${query}&limit=${limit}&skip=${skip}`;
		}
	}

  return url; 
}

const useFetch = (url: string, limit?: number, skip?: number, query?: string) => {
	const cache: TDictionary = useRef({});

	const [state, dispatch] = useReducer(productsApiReducer, productsApiInitialState);
	
	const compositeUrl = buildUrl(url, limit, skip, query);

	useEffect(() => {
		if (!compositeUrl || !compositeUrl.trim()) return;
		const abortFetch = new AbortController();

		const fetchData = async () => {
			dispatch({ type: LOADING });
			
			// check if data for this url was already previously fetched and return data without a new API call
			if (cache.current[compositeUrl]) {
				const data = cache.current[compositeUrl];
				dispatch({ type: FETCHED, payload: data });
			} else {
				try {
					const response = await fetch(compositeUrl, { signal: abortFetch.signal });
					const data = await response.json();

					cache.current[compositeUrl] = data;
					
					dispatch({ type: FETCHED, payload: data });
				} catch (error: any) {
					if (error.name === 'AbortError') return;
					dispatch({ type: FETCH_ERROR, payload: error.message });
				}
			}
		};

		fetchData();

		// if the component is unmount when the fecthing is still going, this will be fired aborting the fetch request
		return function cleanup() {
			abortFetch.abort(); 
		};
	}, [compositeUrl]);

	return state;
};


export default useFetch;