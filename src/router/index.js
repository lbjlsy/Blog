import React, { lazy, Suspense } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import history from '@/history';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import Player from '@/components/Player';
import { routePath } from '@utils/constants';
import Loading from '@/components/Common/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const lazyComponents = path => lazy(() => import(`@/pages/${path}`));
lazyComponents;
const Home = lazyComponents('Home');
const Blog = lazyComponents('Blog');
const BlogDetail = lazyComponents('BlogDetail');
const Music = lazyComponents('Music');
const NotFoundPage = lazy(() => import('@/components/Common/NotFoundPage'));
@inject('layoutStore')
@observer
export default class Routers extends React.Component {
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
            <Route
              path={`${routePath.tag}:id`}
              render={props => <Blog {...props} key={location.pathname} />}
            />
            <Route exact path={routePath.blog} component={Blog} />
            <Route
              exact
              path={`${routePath.blogDetail}:id`}
              component={BlogDetail}
            />
            <Route path={routePath.home} exact component={Home} />
            <Route path={routePath.music} exact component={Music} />
            <Route path={routePath.notFound} exact component={NotFoundPage} />
            <Route component={NotFoundPage} />} />
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
