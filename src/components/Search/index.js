import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../AppContext'
import useDebounce from '../../hooks/useDebounce'
import './styles.scss'

export default function Search() {
    const { debouncedSearchQuery, setDebouncedSearchQuery } = useContext(AppContext)
    const [searchQuery, setSearchQuery] = useState(debouncedSearchQuery)
    const localDsq = useDebounce(searchQuery, 500) ?? "" // Component level debounced search query, hence localDsq

    useEffect(() => {
        setDebouncedSearchQuery(localDsq)
    }, [localDsq, setDebouncedSearchQuery])

    return (
        <section className="hero-search">
            <h1>Catalog your favourite shows in seconds.</h1>
            <p>Add to your list of <span>favourite</span> shows with a single tap, another to mark them as <span>watch later</span>, and another to <span>remove</span>.</p>
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Type a show title. (Example: Sherlock Holmes)" name="s" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                </form>
            </div>
        </section>
    )
}