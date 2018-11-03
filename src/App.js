import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
// Import the Home, Maps, Blog, NotFound components to be used below
import Home from './Home/Home';
import Maps from './Maps/Maps';
import Blog from './Blog/Blog';
import NotFound from './NotFound/NotFound';

import './App.css';
import createBrowserHistory from 'history/createbrowserHistory';

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <header className="header">
            <nav className="navbar container">
              <div className="navbar-brand">
                <Link to="/">
                  <span className="navbar-item">Lazy Loading Routes</span>
                </Link>
              </div>

              <div className="navbar-end">
                <Link to="/maps">
                  <span className="navbar-item">Maps</span>
                </Link>
                <Link to="/blog">
                  <span className="navbar-item">Blog</span>
                </Link>
              </div>
            </nav>
          </header>
          <section className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/maps" component={Maps} />
              <Route path="/blog" component={Blog} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
