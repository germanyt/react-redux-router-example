import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import { Provider } from 'react-redux';

//import components
import App from './components/app.com'
// import Index from './components/index.com'
// import User from './components/user.com'

// import Reg from './components/reg.com'
// import Login from './components/login.com'

import Index from './containers/index.container'
import User from './containers/user.container'
import Reg from './containers/reg.container'
import Login from './containers/login.container'

//import store 
import store from './store/app.store'

//import css 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'


class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}


render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="/about" component={About}/>
        <Route path="users/:id" component={User}>
        </Route>
        <Route path="/signin" component={Login}/>
        <Route path="/signup" component={Reg}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'))

