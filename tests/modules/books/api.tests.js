import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import store from 'store';

import * as c from 'constants';
import * as books from 'modules/books';
import booksJSON from 'fixtures/books.json';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const { types, initialState, actions, api } = books;
const { getBooks } = api;

describe('book api', () => {
  beforeEach(function () {
    this.mock = new MockAdapter(axios);
  });

  afterEach(function () {
    this.mock.reset();
  });

  describe('getBooks()', () => {
    it('should create GET_BOOKS_SUCCESS when fetching books is done.', function () {
      let books = booksJSON,
        searchInfo = {
          'query': 'python',
          'index': 0,
          'maxResults': 20
        };

      const { query, index, maxResults } = searchInfo;

      this.mock.onGet(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(query)}&startIndex=${index}&maxResults=${maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
        .reply(200, { response: { data: books } });

      const expectedActions = [
        { type: 'GET_BOOKS_REQUEST' },
        { type: 'GET_BOOKS_SUCCESS',
          books: { "response": {
            "data": books
            }
          },
          searchInfo: searchInfo
        }
      ];

      const store = mockStore({ books: books });

      return store.dispatch(getBooks(searchInfo))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
