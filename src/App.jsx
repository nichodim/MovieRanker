import './App.css'
import MovieLogo from './components/Movie.jsx'

function App() {
  return (
    <>
      <div id='topdiv'>
        <h1>
          <div id='top-title'>Movie</div>
          <div id='hbottom'>
            <MovieLogo id='movie-img' />
            <span id='bottom-text'>Ranker</span>
          </div>
        </h1>
      </div>
    </>
  )
}

export default App
