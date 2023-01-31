import './styles.scss'

export default function FakeMovieCard({Poster, Title, Year, imdbID}) {
    return (
        <>
            <figure className='movie-card fake-movie-card'>
                <img src={Poster} alt={`${Title} Poster`}></img>
                <div>
                    <h2>{Title}</h2>
                    <div>
                        <p>{Year}</p>
                    </div>
                </div>
            </figure>
        </>
    )
}