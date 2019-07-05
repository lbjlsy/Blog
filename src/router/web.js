import React, { lazy } from "react";
const NotFoundPage = lazy(() =>
  import(
    /*webpackChunkName: "not-found-page",webpackPrefetch: true*/ "../components/Common/NotFoundPage"
  )
);
const Home = lazy(() =>
  import(/*webpackChunkName: "home",webpackPrefetch: true*/ "../pages/Home")
);
const Blog = lazy(() =>
  import(/*webpackChunkName: "blog",webpackPrefetch: true*/ "../pages/Blog")
);
const BlogDetail = lazy(() =>
  import(
    /*webpackChunkName: "blog",webpackPrefetch: true*/ "../pages/BlogDetail"
  )
);
const Music = lazy(() =>
  import(
    /*
    webpackChunkName: "music",
    webpackPrefetch: true
  */
    "../pages/Music"
  )
);
const webRoutes = [
  {
    menu: true,
    icon: "home",
    title: "首页",
    path: "/home",
    component: Home
  },
  {
    menu: true,
    icon: "blog",
    title: "blog",
    path: "/blog",
    component: Blog
  },
  {
    menu: false,
    path: "/article/:id",
    component: BlogDetail
  },
  {
    menu: true,
    icon: "blog",
    title: "music",
    path: "/music",
    component: Music
  },
  {
    component: NotFoundPage
  }
];

export default webRoutes;
