import './styles.scss'
import MovieCard from '../MovieCard'
import { AppContext } from "../../AppContext"
import { useState, useEffect, useContext } from 'react'
import MovieSkeleton from '../MovieCard/MovieSkeleton'

export default function MyCatalogGrid() {

    const { myCatalog } = useContext(AppContext)

    return (
        <section className='movies-grid'>
            {myCatalog.length <= 0 && <p className="no-search">No bookmarks yet</p>}
            {myCatalog && myCatalog.map((movie, key) => <MovieCard key={key} {...movie}></MovieCard>)}
        </section>
    )
}