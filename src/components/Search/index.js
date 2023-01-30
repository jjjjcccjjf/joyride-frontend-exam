import './styles.scss'

export default function Search() {
    return (
        <section className="hero-search">
            <h1>Catalog your favourite movies in seconds.</h1>
            <p>Add to your list of <span>favourite</span> movies with a single tap, another to mark them as <span>watch later</span>, and tap, hold, and release to <span>remove</span>.</p>
            <div>
                <form>
                    <input type="text" name="s"></input>
                </form>
            </div>
        </section>
    )
}