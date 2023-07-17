import { useState, useEffect } from 'react'
import Title from './components/Title.jsx'
import MovieOption from './components/MovieOption.jsx'
import './App.css'

function App() {
  const [score, setScore] = useState(0); 
  const [movies, setMovies] = useState({
    active: {name: 'leftMovie', cover: 'image.png', rating: 8.5}, 
    contest: {name: 'rightMovie', cover: 'image.png', rating: 8.4}
  })

  useEffect(() => {
    // fetch first active movie
  }, []); 

  function chosenMovie(chosen) {
    let notChosen = 'contest'; 
    if (chosen == 'contest') notChosen = 'active'; 

    if (movies[chosen].rating >= movies[notChosen].rating) {
      setScore(prev => prev + 1); 
      setMovies(prev => {
        // Change contest to be newly fetched movie for next round
        return {active: prev[chosen], contest: prev[notChosen]}
      }); 
    } else {
      setScore(prev => 0); 
    }
  }

  return (
    <div id='main'>
      <div id='topdiv'>
        <Title scr={score} />
      </div>
      <div id='gamediv'>
        <div className='option-box1'>
          <MovieOption mov={movies.active} position='active' handleClick={chosenMovie} />
        </div>
        <div id='VSdiv'>
          <p id='VStext'>VS</p>
        </div>
        <div className='option-box2'>
          <MovieOption mov={movies.contest} position='contest' handleClick={chosenMovie} />
        </div>
      </div>
    </div>
  )
}

export default App
