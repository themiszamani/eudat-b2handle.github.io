import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', 'bcf'),
    exact: true
  },
  {
    path: '/blog/2019/05/28/first-blog-post/',
    component: ComponentCreator('/blog/2019/05/28/first-blog-post/', '9e8'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '11a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/', 'a9a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', '051'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'db3'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/', '9d7'),
    exact: true
  },
  {
    path: '/blog/tags/facebook/',
    component: ComponentCreator('/blog/tags/facebook/', 'b50'),
    exact: true
  },
  {
    path: '/blog/tags/hello/',
    component: ComponentCreator('/blog/tags/hello/', 'ee5'),
    exact: true
  },
  {
    path: '/blog/welcome/',
    component: ComponentCreator('/blog/welcome/', 'add'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '249'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '7f8'),
    routes: [
      {
        path: '/docs/account/',
        component: ComponentCreator('/docs/account/', '410'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b2handle-tutorial/authenticate-with-the-library/',
        component: ComponentCreator('/docs/b2handle-tutorial/authenticate-with-the-library/', 'a85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b2handle-tutorial/congratulations/',
        component: ComponentCreator('/docs/b2handle-tutorial/congratulations/', 'f05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b2handle-tutorial/install/',
        component: ComponentCreator('/docs/b2handle-tutorial/install/', '263'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b2handle-tutorial/searching/',
        component: ComponentCreator('/docs/b2handle-tutorial/searching/', '8b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b2handle-tutorial/using-the-library/',
        component: ComponentCreator('/docs/b2handle-tutorial/using-the-library/', '3e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/b2handle---tutorial/',
        component: ComponentCreator('/docs/category/b2handle---tutorial/', '413'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/pyhandle---tutorial/',
        component: ComponentCreator('/docs/category/pyhandle---tutorial/', '33e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro/',
        component: ComponentCreator('/docs/intro/', '688'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pyhandle-tutorial/authenticate-with-the-library/',
        component: ComponentCreator('/docs/pyhandle-tutorial/authenticate-with-the-library/', '687'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pyhandle-tutorial/install-pyhandle/',
        component: ComponentCreator('/docs/pyhandle-tutorial/install-pyhandle/', '850'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pyhandle-tutorial/using-the-library/',
        component: ComponentCreator('/docs/pyhandle-tutorial/using-the-library/', 'e75'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '818'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
