import MovieLogo from './Movie.jsx'

function Title() {
    return (
        <>
            <h1>
                <div id='top-title'>Movie</div>
                <div id='hbottom'>
                    <MovieLogo id='movie-img' />
                    <span id='bottom-text'>Ranker</span>
                </div>
            </h1>
        </>
    )
}

export default Title; 