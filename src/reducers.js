
import { combineReducers } from 'redux';
import * as books from 'modules/books';

// Combine Reducers
var reducers = combineReducers({
  booksState: books.reducer
});

export default reducers;
