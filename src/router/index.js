import React, { lazy, Fragment, Suspense, Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import Player from '@/components/Player';
import routes from '@/router/web';
import APlayer from 'aplayer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Routers extends Component {
  componentDidMount() {
    const ap = new APlayer({
      container: document.getElementById('player'),
      fixed: true,
      lrcType: 1,
      audio: [
        {
          name: '来自天堂的魔鬼',
          artist: 'G.E.M. 邓紫棋'
          // url: 'http://60.217.253.149/amobile.music.tc.qq.com/C400003puKXo19Yh3q.m4a?guid=1636287934&vkey=66F97F1AEAC624C0EEAAF7964274C43BCD9669A56BE526B8913117091E912148B30B42AD3CA5C8209837D2E05B9999FCE5E8CCC29647F4DA&uin=3105&fromtag=66',
          // cover:
          //   'https://y.gtimg.cn/music/photo_new/T002R800x800M000003c616O2Zlswm.jpg?max_age=2592000'
          // lrc: '' // 歌词
        }
      ]
    });
    ap.lrc.show();
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header {...this.props} />
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/home" push />}
              />
              {routes.map(({ path, component }, index) => (
                <Route
                  key={index}
                  exact
                  path={path}
                  component={component}
                />
              ))}
            </Switch>
          </Suspense>
          <ToastContainer />
          <Footer />
          {/* <BackTop visibilityHeight="100" /> */}
          <Player />
        </BrowserRouter>
      </Fragment>
    );
  }
}