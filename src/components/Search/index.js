import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../AppContext'
import useDebounce from '../../hooks/useDebounce'
import FakeMovieCard from '../MovieCard/FakeMovieCard'
import './styles.scss'

export default function Search () {
  const { debouncedSearchQuery, setDebouncedSearchQuery } = useContext(AppContext)
  const [searchQuery, setSearchQuery] = useState(debouncedSearchQuery)
  const localDsq = useDebounce(searchQuery, 500) ?? '' // Component level debounced search query, hence localDsq

  useEffect(() => {
    setDebouncedSearchQuery(localDsq)
  }, [localDsq, setDebouncedSearchQuery])

  const fakeMovies = [
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
      Type: 'movie',
      imdbID: 'tt4154756',
      state: 'favorite'
    },
    {
      Title: 'Dune',
      Year: '2021',
      Poster: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
      Type: 'movie',
      imdbID: 'tt1160419',
      state: 'favorite'
    },
    {
      Title: 'Everything Everywhere All at Once',
      Year: '2022',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg',
      Type: 'movie',
      imdbID: 'tt6710474',
      state: 'favorite'
    }
  ]

  return (
        <section className="hero-search">
            <div className='hero-div'>
                <div className='hero-left'>
                    <h1>Catalog your favourite shows in seconds.</h1>
                    <p>Add to your list of <span>favourite</span> shows with a single click. Another click to mark them as <span>watch later</span>, and another to <span>remove</span>. Then share your catalog with your friends (potentially).</p>
                </div>
                <div className='hero-right'>
                    {fakeMovies.map((movie, key) => <FakeMovieCard key={key} {...movie}></FakeMovieCard>)}

                </div>
            </div>

            <div className='hero-form'>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Type a show title. (Example: Sherlock Holmes)" name="s" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                </form>
            </div>
        </section>
  )
}
