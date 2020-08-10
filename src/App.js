import React , { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import ListingsContainer from './containers/ListingsContainer'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import {login, getCurrentUser, logout} from './actions/userActions'


class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  logButtonRender = () => {
    return (
      this.props.currentUser ? <LogoutForm logout={this.props.logout} /> : <LoginForm login={this.props.login} />
    )
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
            {this.logButtonRender()}
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({currentUser}) => ({currentUser})

export default connect(mapStateToProps, {login, getCurrentUser, logout})(App)
