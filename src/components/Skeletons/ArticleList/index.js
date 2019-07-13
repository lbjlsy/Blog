import React from 'react';
import Skeleton from 'react-loading-skeleton';
import cs from 'classnames';
import './index.less';

const Skeletons = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((v, k) => (
        <div
          className={cs(
            'skeleton_wrapper',
            k % 2 !== 0 ? 'skeleton_wrapper_reverse' : ''
          )}
          key={k}
        >
          <div className="meta">
            <Skeleton width={'60%'} height={'12px'} />
            <div className="title">
              <Skeleton width={'100%'} height={'24px'} />
            </div>
            <div className={'info'}>
              <Skeleton width={'2.7rem'} height={'12px'} />
              <Skeleton width={'2.7rem'} height={'12px'} />
              <Skeleton width={'2.7rem'} height={'12px'} />
            </div>
            <div className="summary">
              <Skeleton count={4} width={'100%'} height={'15px'} />
              <Skeleton width={'80%'} height={'15px'} />
            </div>
            <Skeleton width={'2rem'} height={'12px'} />
          </div>
          <div className="img">
            <Skeleton height={'15rem'} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Skeletons;
