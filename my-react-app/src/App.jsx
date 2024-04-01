import { useState, useEffect } from 'react'
import './App.css'
import SearchPage from './components/SearchPage'

function App() {
  
  const [content, setContent] = useState([])

  const getData = async() =>{
    fetch(`https://openlibrary.org/search.json?q=title:"James Bond"`)
    .then(response => response.json())
    .then(data => setContent(data.docs))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <SearchPage content={content} />
  )
}

export default App
