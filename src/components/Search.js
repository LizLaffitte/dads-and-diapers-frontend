import React, {useState, useEffect} from "react"
import SearchResults from './SearchResults'

function Search (props)  {
    const [term, setTerm] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        const results = props.collection.filter(listing =>
          listing.name.toLowerCase().includes(term)
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
                        <label for="search">Search Listings:</label><br />
                        <input type="search" id="search" name="search" value={term} onChange={handleOnChange} aria-label="Find public restrooms near you" />
                    <input type="submit" />
                </form>
                <div id="search-results">
                    {/* <SearchResults results={results} /> */}
                    {results.map(result => {
                        return <li>{result}</li>
                    })}
                </div>
          </div>
        )


}

export default Search