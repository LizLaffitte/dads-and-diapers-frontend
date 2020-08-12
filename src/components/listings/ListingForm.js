import React, { PureComponent } from 'react'


class ListingForm extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.listing.attributes.name,
            address: this.props.listing.attributes.address
        }
    }


    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.submit(this.state)
        this.props.history.push('/listings')
    }

    render(){
        const {name, address} = this.state
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h2>{this.props.header} Listing</h2>
                <label>Name:</label><br />
                <input type="text" onChange={this.handleOnChange} name="name" value={name} /><br /><br />
                <label>Address:</label>
                <br />
                <input type="text" onChange={this.handleOnChange} name="address" value={address} />
                <br /><br />
                <input  type="submit" />
            </form>
        )
    }

}

export default ListingForm