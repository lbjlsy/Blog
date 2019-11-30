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
const lazyComponents = (path) => lazy(() => import(`@/pages/${path}`))
lazyComponents
const Home = lazyComponents('Home')
const Blog = lazyComponents('Blog')
const BlogDetail = lazyComponents('BlogDetail')
const Music = lazyComponents('Music')
const NotFoundPage = lazyComponents('Common/NotFoundPage')
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
              exact
              path={`${routePath.tag}:id`}
              render={props => <Blog {...props} key={location.pathname} />}
            />
            <Route
              exact
              path={routePath.blog}
              render={props => <Blog {...props} key={location.pathname} />}
            />
            <Route
              exact
              path={routePath.blogDetail}
              render={props => (
                <BlogDetail {...props} key={location.pathname} />
              )}
            />
            <Route path={routePath.home} exact render={() => <Home />} />
            <Route path={routePath.music} exact render={() => <Music />} />
            <Route path={routePath.notFound} exact render={() => <NotFoundPage />} />
            <Route render={() => <NotFoundPage />} />
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
