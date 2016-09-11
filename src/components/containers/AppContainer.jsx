
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import store from 'store';
import * as c from 'constants';
import * as books from 'modules/books';
import Books from 'components/Books';
import Header from 'components/Header';

const {
  getBooks
} = books.api;

class AppContainer extends Component {

  componentWillMount () {
    let searchInfo = {
      'query': c.DEFAULT_SEARCH,
      'index': c.SEARCH_START_INDEX,
      'maxResults': c.RESULTS_PER_PAGE
    };

    store.dispatch(getBooks(searchInfo));
  }

  render () {
    const { booksState } = this.props;
    const { books } = booksState;

    return (
      <div className="app-wrapper">
        <Header />
          {(books.items && books.items.length) &&
          <Books books={books.items} />}
      </div>
    )
  }
}

AppContainer.propTypes = {
  booksState: PropTypes.object.isRequired
}

const mapStateToProps = function (store) {
  return {
    booksState: store.booksState
  }
}

export default connect(mapStateToProps)(AppContainer);
export { AppContainer as PureAppContainer }; // export component outside of connect for testing
