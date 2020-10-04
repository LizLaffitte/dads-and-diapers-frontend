import React, {useState, useEffect} from "react"
import SearchResult from './SearchResult'

function Search (props)  {
    const [term, setTerm] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        const results = props.collection.filter(listing =>
          listing.attributes.name.toLowerCase().includes(term)
        )
        setResults(results)
      }, [term])

    const handleOnChange = (e) => {
        setTerm(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
 
    }
            return(
            <div id="search-form">
                    <form onSubmit={handleOnSubmit}>
                        
                        <input type="search" id="search" name="search" placeholder="Search Listings" value={term} onChange={handleOnChange} aria-label="Find public restrooms near you" />
                        
                    <input type="submit" value="Search" id="search-btn" />
                </form>
                <div id="search-results">
                    {results.map(result => {
                        return <li><SearchResult result={result} name={result.attributes.name} attr={result.attributes.address} /></li>
                    })}
                </div>
          </div>
        )


}

export default Search