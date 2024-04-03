import React, { useState } from 'react'
import Bookcards from './Bookcards'

export default function Searchresults({bookcards, setApiValue}) {

    const [search, setSearch] = useState("")

    const handleSearch = function(event) {
        event.preventDefault()
        if(search.length >= 3) {
            setApiValue(search)
        }
    }

   const handleChange = (event) => {
       setSearch(event.target.value)
    }

    return(
    <>
        <nav>
            <h1>Books</h1>
            <form onSubmit={handleSearch}>
                <label htmlFor="search">Search for books:</label>
                <input type="text" id="search" placeholder="Search" onChange={handleChange}></input>
                <input type="submit" value="søk"></input>
            </form>
        </nav> 
        <main>
            <Bookcards bookcards={bookcards}/>
        </main>
    </>
    )
}

