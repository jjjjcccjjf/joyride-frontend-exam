import './styles.scss'
import MovieCard from '../MovieCard'

export default function MoviesGrid() {
    return (
        <section className='movies-grid'>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
        </section>
    )
}