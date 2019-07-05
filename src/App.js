import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'mobx-react'
import stores from './stores'
import Routes from './router';


class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Routes />
      </Provider>
    )
  }
}

export default App;
