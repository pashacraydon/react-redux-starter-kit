
import expect from 'expect';
import React from 'react';
import * as c from 'constants';
import booksJSON from 'fixtures/books.json';
import Book from 'components/Book';

const { shallow, mount } = enzyme;
const singleBook = booksJSON.items[0];

function setup(properties = {}) {
  const props = Object.assign({
    book: singleBook
  }, properties);

  const enzymeWrapper = shallow(
    <Book {...props} />
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<Book />', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.book-item').length).toExist();
  });

});


