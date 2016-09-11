import React, { Component, PropTypes } from 'react';
import Book from 'components/Book';

export default class Books extends Component {

  render () {
    const { books } = this.props;
    return (
      <ul className="books-list">
        {books.map((book, i) => {
          return <Book key={i} book={book} />;
        })}
      </ul>
    )
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired
}