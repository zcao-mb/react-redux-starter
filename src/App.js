import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer';

import HeaderView from './views/header-view';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(RootReducer)}>
        <div className="App">
          <HeaderView />
        </div>
      </Provider>
    );
  }
}

export default App;
