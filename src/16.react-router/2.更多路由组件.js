import React, { PureComponent } from "react";
import { HashRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import User from './pages/User';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to="/">主页</Link>
          <Link to="/about">关于</Link>
          <Link to='/user'>用户</Link>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path='/user' component={User}/>
            <Route path='/login' component={Login}/>
            <Route component={NoMatch} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
