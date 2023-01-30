import './styles.scss'
import { useState, useEffect } from 'react'
import { Skeleton } from '@mui/material'

export default function MovieCard({ props }) {

    const [title, setTitle] = useState(props.Title)
    const [year, setYear] = useState(props.Year)
    const [image, setImage] = useState(props.Poster)

    useEffect(() => {
        if (title.length > 50) {
            setTitle(title.slice(0, 50) + " ...")
        }
    }, [title, image])

    return (
        <figure className='movie-card'>

            {image !== "N/A" || !image ? <img src={image} alt="..."></img> : <Skeleton className="skeleton-image" animation={false} variant="rectangular" />}

            <div>
                <h2>{title}</h2>
                <p>{year}</p>
            </div>
        </figure>
    )
}