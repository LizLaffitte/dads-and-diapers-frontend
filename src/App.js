import React , { Component } from 'react';
import './App.css';
import ListingsContainer from './containers/ListingsContainer'
class App extends Component {

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <ListingsContainer />
        </header>
      </div>
    )
  }
}



export default App
