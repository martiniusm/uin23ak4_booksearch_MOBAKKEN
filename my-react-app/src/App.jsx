import { useState, useEffect } from 'react'
import './App.css'
import Searchresults from './components/Searchresults'

function App() {
  
  const [bookcards, setBookcards] = useState([])
  const [apiValue, setApiValue] = useState("James Bond")

  const getData = async() =>{
    fetch(`https://openlibrary.org/search.json?q=title:"${apiValue}"`)
    .then(response => response.json())
    .then(data => setBookcards(data.docs))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    getData()
  },[apiValue])

  console.log(apiValue)

  return (
    <Searchresults bookcards={bookcards} setApiValue={setApiValue}/>
  )
}

export default App
