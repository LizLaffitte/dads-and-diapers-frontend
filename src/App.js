import React , { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HeaderContainer from './containers/HeaderContainer'
import ListingsContainer from './containers/ListingsContainer'


class App extends Component {

  render (){
    return (
      <div className="App">
          <Router>
            <div>
              <Route path='/' component={ListingsContainer}  />
            </div>
            </Router>
            <HeaderContainer />
      </div>
    )
  }
}



export default App
