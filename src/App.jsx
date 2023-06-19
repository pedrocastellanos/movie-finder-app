import { useState, useEffect } from 'react'
import './App.css'
import Movie from './Movie';

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")
  
  const getMovies = async (url) => {
    const resp = await fetch(url);
    const respData = await resp.json();
    setMovies(respData.results);
  }

  useEffect(() => {
    getMovies(APIURL)
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    setMovies([])
    getMovies(SEARCHAPI + query);
    setQuery("")
  }

  return (
    <>
      <header>
        <h1>Movie Finder</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" autocomplete="off" id="search" placeholder="Search" className="search" value={query} onChange={(e)=>setQuery(e.target.value)}/>
          <button className='btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </header>
      <main id="main">
        {movies.map((movie, index)=>(
          <Movie movie={movie} key={index}/>
        ))}
      </main>
    </>
  )
}

export default App
