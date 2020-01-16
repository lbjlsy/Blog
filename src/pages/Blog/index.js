import React from 'react';
import './index.less';
import BlogList from '@/components/BlogList';
import Tags from '@/components/BlogList/tags';

class Blog extends React.Component {
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

export default Blog
