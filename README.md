React + Redux Starter Kit
=========================

Everything to get started writing a React + Redux app. Check out [react-books](https://github.com/pashasc/react-books "React Books App") for an example with more features and tests.

This starter kit uses webpack for compiling javaScript written in ES6 format and running a dev server. Simply install the npm packages, ```npm install```. Then run a server, ```npm run server``` and visit ```http://localhost:8080/webpack-dev-server/```.


Script commands
===============

| command  | info  |
|---|---|
| npm run server   | runs a webpack server, visit it at http://localhost:8080/webpack-dev-server/  |
| npm run build  |  compile all the webpack files in /src to /build |
| npm run build:debug | include an informative error stack trace |
| npm run watch  | watch for changes to files and compile them automatically  |
| npm run watch:debug | include an informative error stack trace while watching for changes |
| npm run tests  | run all of the tests |
| npm run watch:test | watch for changes to test files and compile them automatically |
| npm run watch:test:debug | include an informative error stack trace while watching for changes to the test files |


Explanation of app structure
============================

1. **/components**

    Components will make up the parts of your application. They are divided between container components and the rest of the components.

    Container components are smart components. They will deal with state and manage the other components that they render, pass props or callbacks into. 

    Container components listen to state updates via Redux Connect. They automatically pick up state changes which they pass down to their 'child' components as props. 

2. **/modules**

    Modules are the parts of the application which deal with state. They are self-contained units which should expose public functions in index.js for other parts of the application.

    A module will usually contain these files.

    1. **actionTypes.js**
    2. **actions.js** 

        The only way to mutate state in a react app is to emit an action. An action is a plain javaScript object which describes what happened. ActionTypes are kinds of actions.

    3. **reducer.js**

        Reducers maintain a state tree in redux. Reducers are pure functions which do not mutate / change state but rather create a copy of a new state. 

    3. **api.js**

        Functions that facilitate network requests should go in the API file. These functions use Redux Thunk Async Actions to perform requests, dispatch the state of the request then store the response.

    4. **index.js**

        Modules should expose functions via this file. You should not directly import functions in modules from other parts of the application to use. This is best practice to avoid recursive imports and keep code decoupled. 


3. **reducers.js**
  
    This file combines all of the reducers from each module for the Redux Connect store. When state changes happen in the modules, components can listen to the changes via Redux Connect and pick up the exports here.

4. **store.js**

    This file should contain a Redux store of all the reducers. This file is where you can add middleware such as Redux Thunk. 

5. **app.js**

    Initialize your application in this file.

6. **router.js**

    Create routes in this file. Use Reacts router <Link> to create links that use routes. It is best practice to use routes for displaying pages of content so that people can link to them and the browser history (back button) works for them.


Testing
=======

Write tests by including a new entry in ```webpack.config.test.js```. Add this entry to ```tests/run.js```. 

* Run the command ```npm run tests``` to run all of the tests.
* Run the command ```mocha tests/build/componentAppContainerTests --require tests/browser.js``` to run a single test. Substitute "tests/build/componentAppContainerTests" for the test entry you want to run mocha against.

1. Tests use 'axios-mock-adapter' for mocking the axios network requests.

  Example creating a mock axios request;

      let book = booksJSON.items[0];
      this.mock.onGet(`${c.GOOGLE_BOOKS_ENDPOINT}/${book.id}`)
        .reply(200, { response: { data: book } });

  Check out the npm package for more documentation on using axios-mock-adapter. Also, check out ```tests/modules/books/api.tests.js``` for an example using this to mock a redux store. Also, the Redux documentation is really great.

2. Tests use enzyme for testing components. It has a great API for testing click simulations, mounting to mocks, state changes and more. Check out ```tests/components``` for examples.



