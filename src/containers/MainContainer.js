import React, { Component } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginForm from '../components/userForms/LoginForm'
import SignupForm from '../components/userForms/SignupForm'
import {login, signup} from '../actions/userActions'
import ListingsContainer from '../containers/ListingsContainer'

class MainContainer extends Component {
    render(){
        return(
            <main>
                    <Switch>
                        <Route exact path='/login' render={props => <LoginForm {...props} login={this.props.login} />} />
                        <Route exact path='/signup' render={props => <SignupForm {...props} signup={this.props.signup} />} />
                        <Route exact path='/listings' component={ListingsContainer} />
                    </Switch>

            </main>
        )
    }
}

export default connect(null, {login, signup})(MainContainer)