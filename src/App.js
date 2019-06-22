import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'mobx-react'
import stores from './stores'
import Routes from './router';

// import requireLogin from './requireLogin'
// import Login from './pages/admin/login'

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
