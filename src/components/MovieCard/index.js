import './styles.scss'
import { useState, useEffect, useRef, useContext } from 'react'
import { Skeleton } from '@mui/material'
import { AppContext } from '../../AppContext'

export default function MovieCard({ Title, Year, Poster }) {

    return (
        <figure className='movie-card' >
            {Poster !== "N/A" || !Poster ? <img src={Poster} alt="..."></img> : <Skeleton className="skeleton-image" animation={false} variant="rectangular" />}
            <div>
                <h2>{Title}</h2>
                <p>{Year}<br></br><span>liked</span></p>
            </div>
        </figure>
    )
}