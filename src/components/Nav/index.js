import './styles.scss'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../AppContext'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Nav() {

    const { toggleDarkTheme, isThemeDark } = useContext(AppContext)
    const location = useLocation().pathname

    return (
        <nav>
            <IconButton sx={{ ml: 1 }} onClick={toggleDarkTheme} color="inherit">
                {isThemeDark === true ? <DarkModeIcon></DarkModeIcon> : <Brightness4Icon></Brightness4Icon>}
            </IconButton>
            {/* <button onClick={toggleDarkTheme}>Dark/Light Mode</button> */}
            {location === '/' && <Link to="/my-catalog">My Catalog</Link>}
            {location === '/my-catalog' && <Link to="/">Search</Link>}
        </nav>
    )
}