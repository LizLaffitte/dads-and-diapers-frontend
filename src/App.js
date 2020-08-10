import React , { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HeaderContainer from './containers/HeaderContainer'
import ListingsContainer from './containers/ListingsContainer'
import MainContainer from './containers/MainContainer'

class App extends Component {

  render (){
    return (
      <Router>
        <div className="App">
          <HeaderContainer />
          <MainContainer />            
        </div>
      </Router>
    )
  }
}



export default App
