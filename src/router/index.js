import React, { lazy, Suspense, Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import history from '@/history';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import Player from '@/components/Player';
import routes from '@/router/web';
import { routePath } from '@utils/constants';
import Loading from '@/components/Common/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() =>
  import(/*webpackChunkName: "home",webpackPrefetch: true*/ '../pages/Home')
);
const Blog = lazy(() =>
  import(/*webpackChunkName: "blog",webpackPrefetch: true*/ '../pages/Blog')
);
const BlogDetail = lazy(() =>
  import(
    /*webpackChunkName: "blog",webpackPrefetch: true*/ '../pages/BlogDetail'
  )
);
const Music = lazy(() =>
  import(
    /*
    webpackChunkName: "music",
    webpackPrefetch: true
  */
    '../pages/Music'
  )
);
const NotFoundPage = lazy(() =>
  import(
    /*webpackChunkName: "not-found-page",webpackPrefetch: true*/ '../components/Common/NotFoundPage'
  )
);
@inject('layoutStore')
@observer
export default class Routers extends Component {
  componentDidMount() {
    const { layoutStore } = this.props;
    layoutStore.getPlayerList();
  }
  render() {
    return (
      <Router history={history}>
        <Header />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" push />} />
            <Route
              path={`${routePath.tag}:id`}
              render={props => <Blog {...props} key={location.pathname} />}
            />
            <Route
              path={routePath.blog}
              render={props => <Blog {...props} key={location.pathname} />}
            />
            <Route
              path={routePath.blogDetail}
              render={props => (
                <BlogDetail {...props} key={location.pathname} />
              )}
            />
            <Route path={routePath.home} render={() => <Home />} />
            <Route path={routePath.music} render={() => <Music />} />
            <Route path={routePath.notFound} render={() => <NotFoundPage />} />
            <Route render={() => <NotFoundPage />} />
            {/* {routes.map(({ path, component }, index) => (
              <Route
                key={location.pathname}
                exact
                path={path}
                component={component}
              />
            ))} */}
          </Switch>
          <Footer />
          <Player />
        </Suspense>
        <ToastContainer />
        {/* <BackTop visibilityHeight="100" /> */}
      </Router>
    );
  }
}
