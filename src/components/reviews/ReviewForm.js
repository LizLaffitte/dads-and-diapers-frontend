import React, { PureComponent } from 'react'
import Toggle from '../Toggle'

class ReviewForm extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            womens: false,
            mens: false,
            private: false,
            broken: true,
            clear: false,
        }
    }


    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        }, console.log(this.props.history))
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.submit(this.state) ? this.props.history.push(this.props.redirect) : this.props.history.push("/login")
    }

    render(){
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h3>{this.props.header}</h3>
        <p>Does this location have at least one changing table in:</p>
        
                <label>The Men's restroom?</label><br />
                <Toggle name="mens" handleOnChange={this.handleOnChange} />
                <br /><br />
                <label>The Women's restroom? </label>
                <br />
                <Toggle name="womens" handleOnChange={this.handleOnChange} />
                <br /><br />
                <label>A private stall or room? </label>
                <br />
                <Toggle name="private" handleOnChange={this.handleOnChange} />
                <br /><br />
                <p>Does this location have at least one changing table that is:</p>
                <label>Clean? </label>
                <br />
                <Toggle name="clean" handleOnChange={this.handleOnChange} /><br /><br />
                <label>In good working order? </label> 
                <br />
                <Toggle name="broken" handleOnChange={this.handleOnChange} /><br /><br />
                <input  type="submit" />
            </form>
        )
    }

}

export default ReviewForm