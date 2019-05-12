import React, { lazy, Fragment, Suspense, Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const webLayout = lazy(() =>
  import(
    /*
    webpackChunkName: "home",
    webpackPrefetch: true
  */
    '../pages/web/Layout'
  )
);
const NotFoundPage = lazy(() =>
  import(
    /*
    webpackChunkName: "not-found-page",
    webpackPrefetch: true
  */
    '../pages/web/NotFoundPage'
  )
);
const routes = [
  // {
  //   path: '/admin',
  //   component: adminLayout
  // },
  {
    path: '/web',
    component: webLayout
  },
  {
    path: '',
    component: NotFoundPage
  }
];
export default class Routers extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/web/home" push />}
              />
              <Route path="/web" component={webLayout} />
              {routes.map((route, i) => (
                <Route
                key={i}
                path={route.path}
                component={
                  route.path.includes('/admin')
                  ? requireLogin(route.component)
                  : route.component
                }
                />
              ))}
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Fragment>
    );
  }
}
//  Routers;
