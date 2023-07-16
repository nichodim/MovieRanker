function MovieOption({ mov, position, handleClick }) {
    return (
        <>
            <p>Name: {mov.name}</p>
            <p>Cover: {mov.cover}</p>
            <p>Rating: {mov.rating}</p>
            <button type="button" onClick={e => handleClick(position)}>Choose Me</button>
        </>
    )
}

export default MovieOption; 