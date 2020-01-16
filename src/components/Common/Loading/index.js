import React from 'react';
import { LoadingUrl } from '@/utils/constants';

const Loading = () => {
  const styles = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    width: '284px',
    height: '172px',
    textAlign: 'center',
    color: '#000000',
    opacity: 0.2,
    background: `url(${LoadingUrl}) no-repeat center center`
  };
  return <figure style={styles} />;
};

export default Loading;
