import React from 'react';
import { observer, inject } from 'mobx-react';
import history from '@/history';
import { Link } from 'react-router-dom';
import styles from './tags.module.less';
import { routePath } from '@utils/constants';

@inject('articleStore')
@observer
class Tag extends React.Component {
  state = {};
  componentDidMount() {
    const { articleStore } = this.props;
    articleStore.getArticleTags();
  }
  gotoTag = item => {
    history.push({ pathname: `${routePath.tag}${item}` });
  };
  render() {
    const { articleStore } = this.props;
    return (
      <section className={styles.tag_container}>
        <h1>
          <span className={styles.tags_text}>Tags</span>
        </h1>
        <ul className={styles.tags}>
          {articleStore.tags.map((item, index) => (
            <Link key={index} to={`${routePath.tag}${item}`}>
              <li key={index}>
                <span>{item}</span>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    );
  }
}

export default Tag;
