
import * as types from './actionTypes';

export function getBooksRequest() {
  return {
    type: types.GET_BOOKS_REQUEST
  };
}

export function getBooksSuccess(response, searchInfo) {
  return {
    type: types.GET_BOOKS_SUCCESS,
    books: response.data,
    searchInfo: searchInfo
  };
}
