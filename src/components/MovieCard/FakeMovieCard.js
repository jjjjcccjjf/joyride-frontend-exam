import './styles.scss'
import PropTypes from 'prop-types'

export default function FakeMovieCard ({ Poster, Title, Year }) {
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

FakeMovieCard.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired
}
