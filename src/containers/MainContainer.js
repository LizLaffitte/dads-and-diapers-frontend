import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect, useHistory} from 'react-router-dom'
import LoginForm from '../components/userForms/LoginForm'
import SignupForm from '../components/userForms/SignupForm'
import {login, signup, getCurrentUser} from '../actions/userActions'
import ListingsContainer from '../containers/ListingsContainer'

class MainContainer extends Component {
    componentDidMount() {
        this.props.getCurrentUser()
    }

    loggedIn = () =>{
        return this.props.currentUser
    }
    render(){
        return(
            <main>
                    <Switch>
                        <Route exact path='/login' >
                            {this.loggedIn() ? <Redirect to="/listings" /> : <LoginForm login={this.props.login}  />}
                        </Route>
                        <Route exact path='/signup' render={props => <SignupForm {...props} signup={this.props.signup} />} />
                        <Route exact path='/listings' component={ListingsContainer} />
                    </Switch>

            </main>
        )
    }
}
const mapStateToProps = ({currentUser}) => ({currentUser})
export default connect(mapStateToProps, {login, signup, getCurrentUser})(MainContainer)