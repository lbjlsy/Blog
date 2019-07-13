import React from 'react';
import Skeleton from 'react-loading-skeleton';
import cs from 'classnames';
import styles from './index.module.less';

const ArticleDetail = () => {
  return (
    <div className={cs(styles.skeleton_wrapper)}>
      <Skeleton height={'45px'} />
      <div className={styles.meta}>
        <Skeleton width={'200px'} />
        <span className={styles.pv}>
          <Skeleton width={'120px'} />
        </span>
        <span className={styles.tag}>
          <Skeleton width={'60px'} />
        </span>
        <span className={styles.tag}>
          <Skeleton width={'60px'} />
        </span>
        <span className={styles.tag}>
          <Skeleton width={'60px'} />
        </span>
      </div>
      <div className={styles.blockquote}>
        <Skeleton height={'160px'} />
      </div>
      <Skeleton height={'35px'} width={'140px'} />

      <div className={styles.split}>
        <Skeleton height={'1px'} />
      </div>
      <div className={styles.paragh}>
        <Skeleton height={'20px'} />
      </div>
      <div className={styles.paragh}>
        <Skeleton height={'20px'} />
      </div>
      <div className={styles.paragh}>
        <Skeleton height={'20px'} />
      </div>
      <div className={styles.paragh}>
        <Skeleton height={'20px'} />
      </div>
    </div>
  );
};

export default ArticleDetail;
