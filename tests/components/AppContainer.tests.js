
import expect from 'expect';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import store from 'store';
import * as c from 'constants';
import booksJSON from 'fixtures/books.json';
import { PureAppContainer } from 'components/containers/AppContainer';

import Books from 'components/Books';
import Header from 'components/Header';

const { shallow, mount } = enzyme;
const books = booksJSON;
const bookInfo = books.items[0].volumeInfo;
const book = { 'volume': bookInfo };

function setup(properties = {}) {
  const props = Object.assign({
    params: {
      query: 'python',
      index: 1
    },
    routeParams: {
      page: 1,
      query: 'python',
      index: 1
    },
    booksState: {
      books: books
    },
    bookDetailState: {
      book: {}
    }
  }, properties);

  const enzymeWrapper = mount(
    <Provider store={store}>
      <PureAppContainer {...props} />
    </Provider>
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<AppContainer />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.app-wrapper').length).toExist();
    expect(enzymeWrapper.find(Books).length).toExist();
    expect(enzymeWrapper.find(Header).length).toExist();
  });

  it('should render <BookDetail /> if book exists.', (done) => {
    const { enzymeWrapper } = setup({
      book: book
    });

    setTimeout(() => {
      done();
      // wait for ReactCSSTransitionGroup
      expect(enzymeWrapper.find(BookDetail).length).toExist();
    }, 500);
  });

  describe('componentWillMount()', () => {
    it('will mount', () => {
      var spy = sinon.spy(PureAppContainer.prototype, 'componentWillMount');
      const { enzymeWrapper } = setup();
      expect(spy.calledOnce).toExist();
      spy.restore();
    });

    it('should dispatch a request to get books.', () => {
      const searchInfo = {
        query: 'python',
        index: 1,
        maxResults: 20
      };

      const mock = new MockAdapter(axios);
      mock.onPost(`${c.GOOGLE_BOOKS_ENDPOINT}?q=${encodeURIComponent(searchInfo.query)}&startIndex=${searchInfo.index}&maxResults=${searchInfo.maxResults}&projection=full&fields=totalItems,items(id,volumeInfo)`)
        .reply(200, { response: { data: book }
      });

      setup();
      expect(store.getState().booksState.isFetching).toExist();
      mock.restore();
    });
  });
});


