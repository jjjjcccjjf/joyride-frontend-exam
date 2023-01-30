import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import './styles.scss'

export default function Search() {

    const context = useContext(AppContext)

    return (
        <section className="hero-search">
            <h1>Catalog your favourite shows in seconds.</h1>
            <p>Add to your list of <span>favourite</span> shows with a single tap, another to mark them as <span>watch later</span>, and hold-and-release to <span>remove</span>.</p>
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Type a show title. (Example: Sherlock Holmes)" name="s" value={context.searchQuery} onChange={(e) => context.handleSearchQueryChange(e.target.value)}></input>
                </form>
            </div>
        </section>
    )
}