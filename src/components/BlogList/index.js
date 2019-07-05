import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import { observer, inject } from 'mobx-react';
import { formatJSONDate } from '../../utils/tools';
import Skeleton from '../Skeleton/ArticleListSkeleton';
import styles from './index.module.less';

@inject('homeStore')
@observer
class BlogList extends React.Component {
  componentWillMount() {
    const { homeStore } = this.props;
    homeStore.getArticleList();
  }
  render() {
    const { homeStore } = this.props;
    return (
      <>
        {homeStore.articleListLoading ? (
          <Skeleton />
        ) : (
          homeStore.articleList.map(item => {
            return (
              !!item.status === true && (
                <article
                  key={item.id}
                  className={cs(styles.basic_list, styles.basic_direction)}
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
                    <a>
                      <figure className={cs(styles.container_img)}>
                        <img src={item.header_cover} />
                      </figure>
                    </a>
                  </div>
                </article>
              )
            );
          })
        )}
      </>
    );
  }
}

export default BlogList;
