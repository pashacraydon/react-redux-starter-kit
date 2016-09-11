

import React, { Component, PropTypes } from 'react';

export default class Book extends Component {
  render () {
    const { volumeInfo } = this.props.book;

    return (
      <li className="book-item">
        <div className="wrap-book">
          {volumeInfo.imageLinks &&
          <img key={volumeInfo.imageLinks.thumbnail}
            src={volumeInfo.imageLinks.thumbnail} />}
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
}