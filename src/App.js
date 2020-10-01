import React , { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import HeaderContainer from './containers/HeaderContainer'
import MainContainer from './containers/MainContainer'
import FooterContainer from './containers/FooterContainer'

class App extends Component {

  render (){
    return (
      <Router>
        <div className="App">
          <HeaderContainer />
          <MainContainer />  
          <FooterContainer />            
        </div>
      </Router>
    )
  }
}



export default App
