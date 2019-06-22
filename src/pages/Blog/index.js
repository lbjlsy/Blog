import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';
import BlogList from '@/components/BlogList';
import pageHeader from '../../assets/blog_page_header.jpg';
import { observer, inject } from 'mobx-react';

class Blog extends Component {
  componentWillMount() {
    console.log('Blog Will Mount')
  }
  findNotFound = () => {
    const { history } = this.props;
    // history.push({ pathname: 'home', query: { params: '456' } });
  };
  render() {
    return (
      <main className="container">
        <figure
          className="bg_header no-user-select"
        >
          <span>Tech, Basketball, Music, and Life.</span>
        </figure>
        <div className="content-list">
          <BlogList />
          <aside>
            <section>
              <h1>
                <span className="tags-text">Tags</span>
              </h1>
              <ul>
                <li>
                  <a>CSS3</a>
                </li>
                <li>
                  <a>Javascript</a>
                </li>
                <li>
                  <a>Vue</a>
                </li>
                <li>
                  <a>react</a>
                </li>
                <li>
                  <a>react-redux</a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </main>
    );
  }
}

export default Blog;
