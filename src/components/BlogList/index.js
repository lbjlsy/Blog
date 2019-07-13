import React, { useState, useEffect } from 'react';
import history from '@/history';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import { observer, inject } from 'mobx-react';
import { formatJSONDate } from '@/utils/tools';
import Skeleton from '../Skeletons/ArticleList';
import styles from './index.module.less';

@inject('articleStore')
@observer
class BlogList extends React.Component {
  componentDidMount() {
    const { articleStore } = this.props;
    if (history.location.pathname.includes('t')) {
      articleStore.getTagDetail();
    } else {
      articleStore.getArticleList();
    }
  }
  render() {
    const { articleStore } = this.props;
    return (
      <section>
        {articleStore.articleListLoading ? (
          <Skeleton />
        ) : (
          articleStore.articleList.map((item, index) => {
            return (
              !!item.status === true && (
                <article
                  key={item.id}
                  className={cs(
                    styles.basic_list,
                    index % 2 === 0
                      ? styles.basic_direction
                      : styles.reverse_direction
                  )}
                >
                  <div className={cs(styles.basic_item_left)}>
                    <p className={cs(styles.item_released)}>
                      Released {formatJSONDate(item.publish_date)}
                    </p>
                    <Link to={`/article/${item.id}`}>
                      <h3 className={cs(styles.item_title)}>{item.title}</h3>
                    </Link>
                    <div className={cs(styles.item_information)}>
                      {/* <span>44 pv</span>
                  <span>1 Like</span>
                  <span>HTTP</span> */}
                    </div>
                    <p className={cs(styles.item_introduction)}>
                      {item.summary}
                    </p>
                    <div>
                      <a>...</a>
                    </div>
                  </div>
                  <div className={cs(styles.basic_item_right)}>
                    <Link to={`/article/${item.id}`}>
                      <figure className={cs(styles.container_img)}>
                        <img src={item.header_cover} />
                      </figure>
                    </Link>
                  </div>
                </article>
              )
            );
          })
        )}
      </section>
    );
  }
}

export default BlogList;
