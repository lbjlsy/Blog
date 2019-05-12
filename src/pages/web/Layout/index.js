import React, { Component } from 'react';
// import { Layout, Col, BackTop } from 'antd';
import { Route, Switch } from 'react-router-dom';
import HeaderCustom from '../Header';
import routes from '../../../router/web';
import Player from '../Components/player';
import APlayer from 'aplayer';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {
    const ap = new APlayer({
      container: document.getElementById('player'),
      fixed: true,
      lrcType: 1,
      audio: [
        {
          name: '来自天堂的魔鬼',
          artist: 'G.E.M. 邓紫棋',
          // url: 'http://60.217.253.149/amobile.music.tc.qq.com/C400003puKXo19Yh3q.m4a?guid=1636287934&vkey=66F97F1AEAC624C0EEAAF7964274C43BCD9669A56BE526B8913117091E912148B30B42AD3CA5C8209837D2E05B9999FCE5E8CCC29647F4DA&uin=3105&fromtag=66',
          cover:
            'https://y.gtimg.cn/music/photo_new/T002R800x800M000003c616O2Zlswm.jpg?max_age=2592000'
          // lrc: '' // 歌词
        }
      ]
    });
    ap.lrc.show();
  }
  componentWillReceiveProps() {
    console.log('props changed');
  }
  render() {
    return (
      <div>
        <HeaderCustom {...this.props} />
        <Switch>
          {routes.map(({ path, key, component, ...props }, index) => (
            <Route
              key={index}
              exact
              path={path}
              component={component}
              {...props}
            />
          ))}
        </Switch>
        <footer style={{ textAlign: 'center' }}>Copyright © LEBRON 2019</footer>
        {/* <BackTop visibilityHeight="100" /> */}
        <Player />
      </div>
    );
  }
}

export default Index;
