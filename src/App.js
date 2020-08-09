import React , { Component } from 'react';
import './App.css';
import ListingsContainer from './containers/ListingsContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
class App extends Component {

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Route path='/' component={ListingsContainer}  />
            </div>
            </Router>
            <LoginForm />
        </header>
      </div>
    )
  }
}



export default App
