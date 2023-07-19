function MovieOption({ mov, position, handleClick }) {
    return (
        <div className={'option-box-' + position} onClick={e => handleClick(position)} >
            <p className='cover-title' >{mov.name}</p>
            <img className={'cover-' + position} src={mov.cover} />
            <p>Rating: {position == 'active' ? mov.rating : '?'}</p>
        </div>
    )
}

export default MovieOption; 