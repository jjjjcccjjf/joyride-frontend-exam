import './styles.scss'
import MovieCard from '../MovieCard'
import { AppContext } from "../../AppContext"
import { useState, useEffect, useContext } from 'react'
import MovieSkeleton from '../MovieCard/MovieSkeleton'

export default function MoviesGrid() {

    const context = useContext(AppContext)

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (context.searchQuery !== "") {

            setLoading(true)


            fetch(`http://www.omdbapi.com/?apikey=6c0c8bf5&s=${context.searchQuery}`)
                .then(response => response.json())
                .then(response => {
                    try {
                        setMovies(response.Search)
                    } catch (err) {
                        console.error(err.message)
                    }

                })
                .catch(err => console.error(err))
                .finally(setLoading(false));

        }
    }, [context.searchQuery])

    return (
        <section className='movies-grid'>
            {!movies && context.searchQuery === "" && <p className="no-search">Start typing to begin search</p>}
            {!movies && context.searchQuery !== "" && <p className="no-search">No results found</p>}
            {loading &&
                <>
                    <MovieSkeleton></MovieSkeleton>
                    <MovieSkeleton></MovieSkeleton>
                    <MovieSkeleton></MovieSkeleton>
                    <MovieSkeleton></MovieSkeleton>
                </>
            }

            {movies && movies.map((movie, key) => <MovieCard key={key} props={movie}></MovieCard>)}
        </section>
    )
}