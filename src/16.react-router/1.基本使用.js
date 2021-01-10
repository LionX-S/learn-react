import React, { PureComponent } from 'react';
import { HashRouter,Link,Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to='/'>首页</Link>
          <Link to='/about'>关于</Link>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About}/>
        </HashRouter>
      </div>
    )
  }
}
