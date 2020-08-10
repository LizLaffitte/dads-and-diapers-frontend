import React , { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import ListingsContainer from './containers/ListingsContainer'
import LoginForm from './components/LoginForm'
import {login, getCurrentUser} from './actions/userActions'
class App extends Component {
  componentDidMount() {
    this.props.agetCurrentUser()
  }
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Route path='/' component={ListingsContainer}  />
            </div>
            </Router>
            <LoginForm login={this.props.login} />
        </header>
      </div>
    )
  }
}



export default connect(null, {login, getCurrentUser})(App)
