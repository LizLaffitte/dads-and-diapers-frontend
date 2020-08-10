import React , { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HeaderContainer from './containers/HeaderContainer'
import ListingsContainer from './containers/ListingsContainer'


class App extends Component {

  render (){
    return (
      <div className="App">
        <HeaderContainer />
          <Router>
            <div>
              <Route path='/' component={ListingsContainer}  />
            </div>
            </Router>
            
      </div>
    )
  }
}



export default App
