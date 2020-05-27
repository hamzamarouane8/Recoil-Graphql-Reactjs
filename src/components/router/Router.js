import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { map, forEach, get, isString, isFunction, isObject } from 'lodash';
import Lazy from '../lazy/Lazy';

import {
  RecoilRoot,
  useRecoilValue,
  useRecoilState
} from 'recoil';
import { switcherThemeFamily } from '../../pages/recoil/RecoilModule';

import * as store from '../store/LocalStorage';
import UUID from '../commons/uuid';
//--------------------------------------------------------------------

import { loginAction, logoutAction, LOGIN_URI, LOGOUT_URI, HOME_URI } from '../context/Constants';
import { authenticationUser, userState } from '../../pages/recoil/RecoilModule';
//--------------------------------------------------------------------

const ExtRoute = React.memo(({ config, component, access, path, exact, Layout }) => {

  const auth = useRecoilValue(authenticationUser());
  console.log('auth auth auth auth', path,' ####  ',auth)
  const loginPageUri = get(config, 'loginPage', LOGIN_URI);
  const homePage = get(config, 'homePage', HOME_URI);
  if (access) {

    if (auth.authenticated && access['guest']) {
      return <Redirect to="/dashboard" />;
    } else if (!auth.authenticated && !access['guest']) {
      return <Redirect to={loginPageUri} />;
    }
  }


  return (
    <Route path={path} exact={exact} render={(props) => {

      if (isString(component)) {
        return <Redirect to={component} />;
      }

      const redirect = (path) => {
        props.history.push(path);
      };
      const NestedComponent = component;
      const pageProps = { router: { redirect } };

      const view = (
        <Lazy><NestedComponent {...pageProps} /></Lazy>
      );
      // if (path === policy.loginPage) return view;
      return (<Layout {...pageProps}>{view}</Layout>);
    }} />
  );
});

const DefaultLogout = ({ history }) => {

  return null;
};

const NoLayout = ({ children }) => children;

const Page404 = () => <h1>Page not found</h1>;

export default ({ routes, layout, config }) => {
  const [theme , setTheme] = useRecoilState(switcherThemeFamily);
  console.log('theme',theme);
  const _routes = {};
  const layouts = {};
  const access = {}

  forEach(routes, (c, path) => {

    if (isString(c)) {
      _routes[path] = c;
    } else if (isFunction(c)) {
      _routes[path] = React.lazy(c);
    } else if (isObject(c)) {
      layouts[path] = c.layout;
      access[path] = {
        guest: c.guest,
        access: c.access,
      };
      _routes[path] = React.lazy(c.component);
    } else {
      throw new Error('INVALID_ROUTE');
    }

    if (layouts[path] === false) {
      layouts[path] = NoLayout;
    } else {
      layouts[path] = c.layout || NoLayout;
    }

  });


  return (
    <div className={`${ !theme ? 'light': 'dark' }-theme`}>

      <BrowserRouter>
        <Switch>
          {map(_routes, (page, path) => {
            return (
            <ExtRoute exact component={page} path={path} key={path}
              access={access[path]}
              config={config} Layout={layouts[path]} />
          )})}
          {config.session && <Route exact path={LOGOUT_URI} component={DefaultLogout} />}
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
      </div>
  );

};
