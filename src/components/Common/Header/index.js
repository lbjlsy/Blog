import React, { useState, useEffect } from 'react';
import cs from 'classnames';
import throttle from 'lodash/throttle';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const Header = () => {
  const [isTop, setTop] = useState(true);
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(e => {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (!t) {
          setTop(true);
        } else {
          setTop(false);
        }
      }, 150)
    );
  }, [isTop]);
  return (
    <div
      id="header"
      className={cs(styles.header, isTop ? styles.header_top : '')}
    >
      <a className={cs(styles.logo)} src="/" />
      <ul className={cs(styles.default)}>
        <li>
          <Link to="/">
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
      </ul>
    </div>
  );
};

export default Header;
