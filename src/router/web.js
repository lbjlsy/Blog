import React, { lazy } from 'react'
// const Archive = loadable(()=>import('../pages/web/archive'))
const NotFoundPage = lazy(() =>
  import(
    /*
    webpackChunkName: "not-found-page",
    webpackPrefetch: true
  */
    '../pages/web/NotFoundPage'
  )
);
const Home = lazy(() =>
  import(
    /*
    webpackChunkName: "home",
    webpackPrefetch: true
  */
    '../pages/web/Home'
  )
);
const Blog = lazy(() =>
  import(
    /*
    webpackChunkName: "blog",
    webpackPrefetch: true
  */
    '../pages/web/Blog'
  )
);
const Music = lazy(() =>
  import(
    /*
    webpackChunkName: "music",
    webpackPrefetch: true
  */
    '../pages/web/Music'
  )
);
const webRoutes = [
  {
    menu: true,
    icon: 'home',
    title: '首页',
    path: '/web/home',
    component: Home
  },
  {
    menu: true,
    icon: 'blog',
    title: 'blog',
    path: '/web/blog',
    component: Blog
  },
  {
    menu: true,
    icon: 'blog',
    title: 'music',
    path: '/web/music',
    component: Music
  },
  {
    component: NotFoundPage
  }
  // {
  //   menu: true,
  //   icon: 'edit',
  //   title: '归档',
  //   path: '/web/archive',
  //   component: Archive
  // }
];

export default webRoutes;
