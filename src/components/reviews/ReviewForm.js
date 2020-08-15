import React, { PureComponent } from 'react'
import Toggle from '../Toggle'

class ReviewForm extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            womens: props.review.attributes.womens,
            mens: props.review.attributes.mens,
            isolated: props.review.attributes.isolated,
            working: props.review.attributes.working,
            clean: props.review.attributes.clean,
            listing_id: props.listing.id 
        }
    }


    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.submit(this.state) ? this.props.history.push(this.props.redirect) : this.props.history.push("/login")
    }

    render(){
    const {womens, mens, isolated, clean, working} = this.state
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h3>{this.props.header}</h3>
        <p>Does this location have at least one changing table in:</p>
        
                <label>The Men's restroom?</label><br />
                <Toggle name="mens" handleOnChange={this.handleOnChange} isChecked={mens} />
                <br /><br />
                <label>The Women's restroom? </label>
                <br />
                <Toggle name="womens" handleOnChange={this.handleOnChange} isChecked={womens} />
                <br /><br />
                <label>A private stall or room? </label>
                <br />
                <Toggle name="isolated" handleOnChange={this.handleOnChange}  isChecked={isolated} />
                <br /><br />
                <p>Does this location have at least one changing table that is:</p>
                <label>Clean? </label>
                <br />
                <Toggle name="clean" handleOnChange={this.handleOnChange}   isChecked={clean} /><br /><br />
                <label>In good working order? </label> 
                <br />
                <Toggle name="working" handleOnChange={this.handleOnChange}   isChecked={working} /><br /><br />
                <input  type="submit" />
            </form>
        )
    }

}

export default ReviewForm