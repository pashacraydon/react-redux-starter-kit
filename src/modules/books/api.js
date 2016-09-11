
import axios from 'axios';
import store from 'store';
import * as c from 'constants';

import {
  getBooksSuccess,
  getBooksRequest
} from './actions';

/**
 * Get a series of books
 */

export function getBooks(searchInfo) {
  const { query, maxResults, index } = searchInfo;
  return function (dispatch) {
    dispatch(getBooksRequest());
    return axios.get(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(query)}&startIndex=${index}&maxResults=${maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
      .then(response => dispatch(getBooksSuccess(response, searchInfo))
    );
  }
}


