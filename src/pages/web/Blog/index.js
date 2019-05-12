import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';
import pageHeader from '../../../assets/blog_page_header.jpg';
class Blog extends Component {
  componentWillMount() {}
  findNotFound = () => {
    const { history } = this.props;
    history.push({ pathname: 'home', query: { params: '456' } });
  };
  render() {
    return (
      <main>
        <figure
          className="bg_header no-user-select"
          style={{
            backgroundImage: `url(${pageHeader})`
          }}
        >
          <span>Tech, Basketball, Music,  and Life.</span>
        </figure>
      </main>
    );
  }
}

export default Blog;
