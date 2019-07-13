import React, { Component } from "react";
import cs from "classnames";
import _ from "lodash";
import { Link } from "react-router-dom";
import styles from "./index.module.less";

class Header extends Component {
  state = {
    isTop: true,
  };
  componentDidMount() {
    window.addEventListener(
      "scroll",
      _.throttle((e) => {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (!t) {
          this.setState({
            isTop: true,
          });
        } else {
          this.setState({
            isTop: false,
          });
        }
      }, 150)
    );
  }

  render() {
    const { isTop } = this.state;
    return (
      <div id="header" className={cs(styles.header, isTop ? styles.header_top : '')}>
        <a className={cs(styles.logo)} src="/" />
        <ul className={cs(styles.default)}>
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
          {/* <li>
            <Link to="/music">
              <i className="iconfont icon-yinle" />
              <span>&nbsp;Music</span>
            </Link>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Header;
