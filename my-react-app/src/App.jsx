import { useState, useEffect } from 'react'
import './App.css'
import Searchresults from './components/Searchresults'

function App() {
  
  const [bookcards, setBookcards] = useState([])

  const getData = async() =>{
    fetch(`https://openlibrary.org/search.json?q=title:"James Bond"`)
    .then(response => response.json())
    .then(data => setBookcards(data.docs))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Searchresults bookcards={bookcards} />
  )
}

export default App
