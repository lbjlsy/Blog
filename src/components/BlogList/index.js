import React from 'react';
import history from '@/history';
import { Link } from 'react-router-dom';
import cs from 'classnames';
import { observer, inject } from 'mobx-react';
import {
  LazyLoadImage,
  trackWindowScroll
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { formatJSONDate } from '@/utils/tools';
import Skeleton from '../Skeletons/ArticleList';
import styles from './index.module.less';
import { routePath } from '@utils/constants';
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
                  <Link to={`${routePath.blogDetail}${item.id}`}>
                    <h3 className={cs(styles.item_title)}>{item.title}</h3>
                  </Link>
                  <div className={cs(styles.item_information)}></div>
                  <p className={cs(styles.item_introduction)}>{item.summary}</p>
                  <div className={cs(styles.item_links)}>
                    <Link to={`${routePath.blogDetail}${item.id}`}>...</Link>
                  </div>
                </div>
                <div className={cs(styles.basic_item_right)}>
                  <Link to={`${routePath.blogDetail}${item.id}`}>
                    <figure className={cs(styles.container_img)}>
                      <LazyLoadImage
                        alt={item.title}
                        width="100%"
                        height="100%"
                        effect="blur"
                        src={item.header_cover}
                      />
                    </figure>
                  </Link>
                </div>
              </article>
            );
          })
        )}
      </section>
    );
  }
}

export default trackWindowScroll(BlogList);
