import './styles.scss'
import MovieCard from '../MovieCard'
import { AppContext } from "../../AppContext"
import { useState, useEffect, useContext } from 'react'
import MovieSkeleton from '../MovieCard/MovieSkeleton'

export default function MoviesGrid() {

    const { debouncedSearchQuery } = useContext(AppContext)

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [apiError, setApiError] = useState(false)

    useEffect(() => {

        const getMoviesApiCall = () => {
            fetch(`https://www.omdbapi.com/?apikey=6c0c8bf5&s=${debouncedSearchQuery}`)
                .then(response => response.json())
                .then(response => {
                    if ("Search" in response) {
                        setMovies(response.Search)
                        setNotFound(false)
                        setApiError(false)
                    } else {
                        setMovies([])
                        setNotFound(true)
                        setApiError(false)
                    }
                })
                .then(() => {
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setMovies([])
                    setLoading(false)
                    setApiError(true)
                })
        }

        if (debouncedSearchQuery !== "") {
            setLoading(true)
            getMoviesApiCall()
        } else {
            setMovies([])
        }
    }, [debouncedSearchQuery])

    return (
        <section className='movies-grid'>
            {debouncedSearchQuery === "" && movies.length <= 0 && <p className="no-search">Start typing to begin search</p>}
            {notFound && loading === false && debouncedSearchQuery !== "" && <p className="no-search">No results found</p>}
            {apiError && loading === false && debouncedSearchQuery !== "" && <p className="no-search">API returned an error</p>}
            {loading &&
                <>
                    <MovieSkeleton></MovieSkeleton>
                </>
            }

            {movies && movies.map((movie, key) => <MovieCard key={key} {...movie}></MovieCard>)}
        </section>
    )
}