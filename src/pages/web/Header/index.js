import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.less';

class webHeader extends Component {
  componentDidMount () {
    let HeaderEle = document.getElementsByClassName('header')[0];
    window.addEventListener('scroll', function(e) {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t <= 0) {
        HeaderEle.classList.add('header-top')
      } else {
        HeaderEle.classList.remove("header-top")
      }
    });
  }

  render() {
    return (
      <div id="header" className="header header-top">
        <a className="logo" src="/" />
        <ul className="default">
          <li>
            <Link to="/web/home">
              <i className="iconfont icon-home" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/web/blog">
              <i className="iconfont icon-blog" />
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/web/music">
              <i className="iconfont icon-yinle" />
              <span>&nbsp;Music</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default webHeader;
