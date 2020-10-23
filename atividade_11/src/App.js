import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Create from './components/Create';
import Edit from './components/Edit';
import List from './components/List';
import Home from './components/Home';

import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">CRUD</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/signin'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/signup'} className="nav-link">Cadastro</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/insert'} className="nav-link">Inserir</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/list'} className="nav-link">Listar</Link>
                </li>
              </ul>
              {this.props.user}
            </div>
          </nav>

          <h2>Projeto CRUD</h2> <br />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <Route path='/insert' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/list' component={List} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user
  }
}
export default connect(mapStateToProps)(App)