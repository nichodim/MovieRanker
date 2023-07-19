import { useState, useEffect } from 'react'
import Menu from './components/Menu.jsx'
import Title from './components/Title.jsx'
import MovieOption from './components/MovieOption.jsx'
import './App.css'

function App() {
  const [started, setStarted] = useState(false); 
  const [score, setScore] = useState(0); 
  const [nextMovie, setNextMovie] = useState({name: 'placeholder', cover: 'image.png', rating: 8.5, failed: false}); 
  const [movies, setMovies] = useState({
    active: {name: 'placeholder', cover: 'image.png', rating: 8.5, failed: false}, 
    contest: {name: 'placeholder', cover: 'image.png', rating: 8.4, failed: false}
  })

  function findMovie() {
    // find random popular movie name
    const furthestPage = 8; 
    const pageNo = `${Math.floor(Math.random() * furthestPage) + 1}`; 
    const randomNo = Math.floor(Math.random() * 20); 

    const TMBburl = `https://api.themoviedb.org/3/movie/popular?api_key=f095d46f17ccf50c2bbd19c03d5b3a41&language=en-us&page=${pageNo}`; 
    $.ajax({
      method: 'GET', 
      url: TMBburl, 
      success: function(d) {
        const OMDburl = 'http://www.omdbapi.com/?apikey=aa57fe2f&&t='; 
        $.ajax({
          method: 'GET', 
          url: OMDburl + d.results[randomNo].title, 
          success: function(d) {
            if (d.Title == 'N/A' || d.Ratings[0].Source != 'Internet Movie Database' || d.Poster == 'N/A') findMovie(); 
            else setNextMovie(() => {
              return {name: d.Title, cover: d.Poster, rating: d.Ratings[0].Value, failed: false}
            }); 
          }
        }); 
      }
    }); 
  }

  function startGame() {
    setStarted(() => true); 
  }

  function chosenMovie(chosen) {
    let notChosen = 'contest'; 
    if (chosen == 'contest') notChosen = 'active'; 

    if (movies[chosen].rating >= movies[notChosen].rating) {
      setScore(prev => prev + 1); 
      movies[notChosen].failed = true; 
      findMovie(); 
    } else {
      setStarted(() => false); 
    }
  }

  useEffect(() => {
    findMovie(); 
    findMovie(); 
  }, []); 

  useEffect(() => {
    if (localStorage.getItem('score') < score) localStorage.setItem('score', `${score}`);
  }, [score])

  useEffect(() => {
    if (movies.active.name == 'placeholder') {
      setMovies(prev => {
        return {...prev, active: nextMovie}; 
      }); 
    } else if (movies.contest.name == 'placeholder' || movies.contest.failed) {
      setMovies(prev => {
        return {...prev, contest: nextMovie}; 
      }); 
    } else if (movies.active.failed) {
      setMovies(prev => {
        return {...prev, active: nextMovie}; 
      }); 
      setMovies(prev => {
        return {active: prev.contest, contest: prev.active}; 
      }); 
    }
  }, [nextMovie]); 

  return (
    <div id='main'>
      <div id='topdiv'>
        <Title scr={score} />
      </div>

      {started &&
        <div id='gamediv'>
          <MovieOption mov={movies.active} position='active' handleClick={chosenMovie} />
          <div id='VSdiv'>
            <p id='VStext'>VS</p>
          </div>
          <MovieOption mov={movies.contest} position='contest' handleClick={chosenMovie} />
        </div>
      }
      {!started && 
        <Menu handleClick={startGame} />
      }
    </div>
  )
}

export default App
