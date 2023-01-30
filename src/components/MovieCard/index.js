import './styles.scss'
import { useState, useEffect, useRef, useContext } from 'react'
import { Skeleton } from '@mui/material'
import { AppContext } from '../../AppContext'

export default function MovieCard({ props }) {

    const context = useContext(AppContext)

    const [title, setTitle] = useState(props.Title)
    const [year, setYear] = useState(props.Year)
    const [image, setImage] = useState(props.Poster)
    const [status, setStatus] = useState(0)

    useEffect(() => {
        if (title.length > 50) {
            setTitle(title.slice(0, 50) + " ...")
        }
    }, [title, image])

    return (
        <figure className='movie-card' onClick={() => context.handleMovieCardClick(props)}>

            {image !== "N/A" || !image ? <img src={image} alt="..."></img> : <Skeleton className="skeleton-image" animation={false} variant="rectangular" />}

            <div>
                <h2>{title}</h2>
                <p>{year}<br></br><span>liked</span></p>
            </div>
        </figure>
    )
}