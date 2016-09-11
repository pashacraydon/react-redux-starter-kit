var path = require('path');
var webpack = require('webpack');

config = require('./webpack.config.js');

config.entry = {
  modulesBooksApiTests: ['./tests/modules/books/api.tests'],
  modulesBooksActionsTests: ['./tests/modules/books/actions.tests'],
  modulesBooksReducerTests: ['./tests/modules/books/reducer.tests'],
  componentAppContainerTests: ['./tests/components/AppContainer.tests'],
  componentBookTests: ['./tests/components/Book.tests'],
  componentBooksTests: ['./tests/components/Books.tests'],
  componentHeaderTests: ['./tests/components/Header.tests']
};

config.output = {
  path: path.resolve(__dirname, './tests/build'),
  pathinfo: true,
  filename: '[name].js'
};

module.exports = config;