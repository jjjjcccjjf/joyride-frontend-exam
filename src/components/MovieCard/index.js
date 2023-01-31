import './styles.scss'
import { useRef, useContext } from 'react'
import { Skeleton } from '@mui/material'
import { AppContext } from '../../AppContext'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import PreviewIcon from '@mui/icons-material/Preview'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function MovieCard ({ Title, Year, Poster, Type, imdbID, state }) {
  const cardRef = useRef()
  const { handleMovieCardClick, isThemeDark } = useContext(AppContext)

  const handleClickAnimation = () => {
    cardRef.current.classList.toggle('clicked')
    setTimeout(() => {
      if (cardRef.current !== null) { cardRef.current.classList.toggle('clicked') }
    }, 200)
  }

  return (
        <figure ref={cardRef} className={clsx('movie-card', isThemeDark ? 'card-dark' : '')} onClick={() => {
          handleMovieCardClick({ Title, Year, Poster, Type, imdbID })
          handleClickAnimation()
        }}>
            {Poster !== 'N/A' || !Poster ? <img src={Poster} alt={`${Title} Poster`}></img> : <Skeleton className="skeleton-image" animation={false} variant="rectangular" />}
            <div>
                <h2>{Title}</h2>
                <div>
                    {state === 'favorite' && <ThumbUpIcon fontSize='small'></ThumbUpIcon>}
                    {state === 'watch-later' && <PreviewIcon fontSize='small'></PreviewIcon>}
                    <p>{Year}</p>
                </div>
            </div>
        </figure>
  )
}

MovieCard.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  Poster: PropTypes.string,
  Type: PropTypes.string,
  imdbID: PropTypes.string,
  state: PropTypes.string
}
