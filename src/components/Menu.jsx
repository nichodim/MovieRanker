export default function Menu({ handleClick }) {
    let scr = localStorage.getItem('score'); 
    return (
        <div className='menu' >
            {scr != null && 
                <div className='high-score'>
                    <h2 className='scr-text'>High Score</h2>
                    <p className='scr'>{scr}</p>
                </div>
            }
            <h2>About</h2>
            <p>MovieRanker is a game where you guess which popular movie has a higher ranking on IMDb</p>
            <p>To get started, click below!</p>
            <button className='play-btn' input='button' onClick={handleClick} ><span className='play-text'>PLAY</span></button>
        </div>
    ); 
}