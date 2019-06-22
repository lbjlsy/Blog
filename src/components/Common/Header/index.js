import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

class Header extends Component {
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
            <Link to="/home">
              <i className="iconfont icon-home1" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <i className="iconfont icon-blog" />
              <span>&nbsp;Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/music">
              <i className="iconfont icon-yinle" />
              <span>&nbsp;Music</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
