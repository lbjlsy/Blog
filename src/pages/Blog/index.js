import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';
import BlogList from '@/components/BlogList';
import Tags from '@/components/BlogList/tags';

export default class Blog extends Component {
  render() {
    return (
      <main className="container">
        <figure className="bg_header no-user-select">
          <span>Tech, Basketball and Life.</span>
        </figure>
        <div className="content-list">
          <BlogList />
          <aside>
            <Tags />
          </aside>
        </div>
      </main>
    );
  }
}
