import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button'
import ChanceSymbol from '../ChanceSymbol'

class Listing extends Component {
    renderRatings = () => {
        const {mens_chance, womens_chance, isolated_chance, clean_chance, working_chance} = this.props.listing.attributes
        return(
        <div className="rating-results">
            <div>Men's: {this.chanceCheck(mens_chance)}</div>
            <div>Women's: {this.chanceCheck(womens_chance)}</div>
            <div>Private: {this.chanceCheck(isolated_chance)}</div>
        <div>Clean: {this.chanceCheck(clean_chance)}</div>
        <div>Working: {this.chanceCheck(working_chance)}</div>
        </div>
        )
    }
    chanceCheck = (chance) =>{
        if(chance){
            if(chance == 50){
                return(<ChanceSymbol color="orange" content="✔|✖" />)
            } else if(chance > 75){
                return(<ChanceSymbol color="green" content="✔" />)
            }
            else if(50 > chance < 75){
                return(<ChanceSymbol color="orange" content="✔" />)
            } else if(25 < chance < 50 ){
                return(<ChanceSymbol color="orange" content="✖" />)
            } else {
                return(<ChanceSymbol color="red" content="✖" />)              
            }
            
        } else if(chance == 0){
            return(<ChanceSymbol color="red" content="✖" />) 
        } else {
            return(<ChanceSymbol color="gray" content={"?"} />)

        }
    }
    buttonCheck = () => {
        if(this.props.more){
            return (<Button link={`/listings/${this.props.listing.id}`} text="More" />)
        }
    }
    render(){
        const {name, address} = this.props.listing.attributes
        const {id} = this.props.listing
        return(
            <div className="listing" >
               <h2>{name}</h2>
                <p>{address}</p>
               {this.renderRatings()}
               {this.buttonCheck()}
            </div>
        )
    }
}

export default Listing