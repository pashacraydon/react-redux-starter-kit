
import expect from 'expect';
import * as books from 'modules/books';
import booksJSON from 'fixtures/books.json';

const { types, actions } = books;

describe('book actions', () => {
  it('should create a success action to resolve a request to get books.', () => {
    const response = { data: booksJSON };
    const books = booksJSON;
    const searchInfo = {
      'query': 'python',
      'index': 0,
      'maxResults': 20
    };

    const expectedAction = {
      type: types.GET_BOOKS_SUCCESS,
      books,
      searchInfo
    }

    expect(actions.getBooksSuccess(response, searchInfo)).toEqual(expectedAction);
  });

  it('should create an action to make request to get books.', () => {
    const expectedAction = {
      type: types.GET_BOOKS_REQUEST
    }

    expect(actions.getBooksRequest()).toEqual(expectedAction);
  });
});

