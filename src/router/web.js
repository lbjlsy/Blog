import React, { lazy } from "react";
import { routePath } from "@utils/constants";
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
    path: `${routePath.home}`,
    component: Home
  },
  {
    menu: true,
    icon: "blog",
    title: "blog",
    path: `${routePath.blog}`,
    component: Blog
  },
  {
    menu: false,
    path: `${routePath.blogDetail}:id`,
    component: BlogDetail
  },
  {
    menu: false,
    path: `${routePath.tag}:id`,
    component: Blog
  },
  {
    menu: true,
    icon: "blog",
    title: "music",
    path: `${routePath.music}`,
    component: Music
  },
  {
    component: NotFoundPage
  }
];

export default webRoutes;
