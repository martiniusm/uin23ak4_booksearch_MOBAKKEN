import React, { useState } from 'react'
import Content from './Content'

export default function SearchPage({content}) {

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return(
    <>
        <nav>
            <h1>Books</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search for characters:</label>
                <input type="text" id="search" placeholder="Search" onChange={handleChange}></input>
                <input type="submit" value="søk"></input>
            </form>
        </nav> 
        <main>
            <Content content={content}/>
        </main>
    </>
    )
}