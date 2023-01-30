import './styles.scss'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {

    const location = useLocation().pathname

    return (
        <nav>
            <button>Dark/Light Mode</button>
            {location === '/' && <Link to="/my-catalog">My Catalog</Link>}
            {location === '/my-catalog' && <Link to="/">Search</Link>}
        </nav>
    )
}