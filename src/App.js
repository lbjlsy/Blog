import React, { Component, lazy, Suspense } from 'react';

import Routes from './router';
// import requireLogin from './requireLogin'
// import Login from './pages/admin/login'
class App extends Component {
  render() {
    return <Routes />
  }
}

export default App;
