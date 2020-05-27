import React from 'react';
import HomePage from './pages/homepage/HomePage';
import './app.css';
import Shop from './pages/shop/Shop';
import Layout from './pages/layout/layout_guest';
import LayoutClient from './pages/layout/layout_client';

import Router from './components/router/Router';

import {
    RecoilRoot,
    useRecoilValue,
  } from 'recoil';
  import { switchTheme } from './pages/recoil/RecoilModule';

  //----------------------- GRAPHQL ------------------------------
  
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
 
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const cache = new InMemoryCache();
const client = new ApolloClient({
    link: httpLink,
    cache,
  });


export default () => {

    const routes = {
        '/':'/login',
        '/dashboard': {
            layout : LayoutClient ,
            component: ()=> import('./pages/dashboard/Dashboard') ,
            guest: false
        },
        '/canvas': {
            layout : Layout ,
            component: ()=> import('./pages/canvas/CanvasPage') ,
            guest: true
        },
        '/products': {
            layout : LayoutClient ,
            component: ()=> import('./pages/products/Products') ,
            guest: false
        },
        '/shop': {
            layout : Layout ,
            component: ()=> import('./pages/shop/Shop') ,
            guest: true
        },
        '/login':{
            layout: Layout,
            component : ()=>import('./pages/sign-in-and-sign-up/SignInAndUp')     ,
            guest: true
        }
       
    }
   
    return (
        <ApolloProvider client={client}>
        <RecoilRoot>
        <Router routes={routes} config={{session: true}}/>
        </RecoilRoot>
        </ApolloProvider>
);
};

