import React, { Component } from 'react';
import Carousel from './carousel';
import styles from './index.module.less';
import BlogList from '@/components/BlogList';
import cs from 'classnames';
import { observer, inject } from 'mobx-react';

@inject('homeStore')
@observer
class Home extends Component {
  componentWillMount() {
    console.log('Home Will Mount')
  }

  findNotFound = () => {
    const { history, homeStore } = this.props;
  };
  render() {
    const { homeStore } = this.props;
    return (
      <div className={cs(styles.main)}>
        <Carousel />
        <article>
          <h2 className={cs(styles.title)}>The latest~</h2>
          <BlogList />
        </article>
      </div>
    );
  }
}

export default Home;
