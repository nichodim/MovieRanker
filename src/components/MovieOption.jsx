function MovieOption({ mov, position, handleClick }) {
    return (
        <div className={'option-box-' + position} >
            <p>{mov.name}</p>
            <img className={'cover-' + position} src={mov.cover} />
            <p>Rating: {position == 'active' ? mov.rating : '?'}</p>
            <button className={'option-btn-' + position} type="button" onClick={e => handleClick(position)}>Choose Me</button>
        </div>
    )
}

export default MovieOption; 