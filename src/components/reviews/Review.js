import React, {Component} from 'react'
import Button from '../Button'

class Review extends Component  {
    classDecision = (prop) => {
        if(prop) {
            return "green"
        } else {
            return "red"
        }
    }

    isOwner = (user) => {
        if(this.props.currentUser && user.id.toString() === this.props.currentUser.id){
            return (
                <div>
                <Button link={`/listings/${this.props.listing.id}/reviews/${this.props.review.id}/edit`} text="Edit" /> 
                <Button link={`/listings/${this.props.listing.id}/reviews/${this.props.review.id}/delete`} text="Delete" /> 
                </div>
                )
        }
    }
        
    render() {
        const {womens, mens, working, user, clean, isolated} = this.props.review.attributes
        return(
            <div className="review">
                {user.username}
                <div>
                <span className={this.classDecision(mens)}>Men's</span> | <span className={this.classDecision(womens)}>Women's</span> <br />
                <span className={this.classDecision(isolated)}>Private</span> | <span className={this.classDecision(clean)}>Clean</span> | <span className={this.classDecision(working)}>Working</span>
                    {this.isOwner(user)}
                </div>
            </div>
        )
    }
        
}

export default Review