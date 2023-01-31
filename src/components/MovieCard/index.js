import './styles.scss'
import { useState, useEffect, useRef, useContext } from 'react'
import { Skeleton } from '@mui/material'
import { AppContext } from '../../AppContext'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PreviewIcon from '@mui/icons-material/Preview';

export default function MovieCard({ Title, Year, Poster, Type, imdbID, state }) {

    const cardRef = useRef()
    const { handleMovieCardClick } = useContext(AppContext)

    const handleClickAnimation = () => {
        cardRef.current.classList.toggle('clicked');
        setTimeout(() => {
            if (cardRef.current !== null)
                cardRef.current.classList.toggle('clicked');
        }, 200)
    }

    return (
        <figure ref={cardRef} className='movie-card' onClick={() => {
            handleMovieCardClick({ Title, Year, Poster, Type, imdbID })
            handleClickAnimation()
        }}>
            {Poster !== "N/A" || !Poster ? <img src={Poster} alt="..."></img> : <Skeleton className="skeleton-image" animation={false} variant="rectangular" />}
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