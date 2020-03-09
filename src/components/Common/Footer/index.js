import React from 'react';
import './index.less'
const Footer = () => {
  return (
    <footer className="footer">
      Copyright {new Date().getFullYear()} © Lebron James All rights reserved. <a href="http://www.beian.miit.gov.cn" target="_blank">湘ICP备19013327号</a>
    </footer>
  );
};

export default Footer;
