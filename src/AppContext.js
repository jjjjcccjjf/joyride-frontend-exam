import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")
    const [myCatalog, setMyCatalog] = useState([])
    const [isThemeDark, setIsThemeDark] = useState(false)

    useEffect(() => {
        if (isThemeDark) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [isThemeDark])

    const toggleDarkTheme = () => {
        setIsThemeDark(prev => !prev)
    }

    const isCatalogExists = (newItem) => {
        return myCatalog.some(item => item.imdbID === newItem.imdbID);
    }

    const handleMovieCardClick = (details) => {
        if (!isCatalogExists(details)) { // If not exists, add to catalog
            setMyCatalog([...myCatalog, { ...details, state: 'favorite' }]);
        } else { // If exists
            const movie = myCatalog.find(item => item.imdbID === details.imdbID);

            setMyCatalog(prev => {
                if (movie.state === 'favorite') {
                    return prev.map(item => {
                        if (item.imdbID === movie.imdbID) {
                            return { ...item, state: 'watch-later' }
                        } else {
                            return item
                        }
                    })
                } else {
                    return prev.filter(item => item.imdbID !== movie.imdbID)
                }
            })

        }
    }

    const value = { debouncedSearchQuery, setDebouncedSearchQuery, handleMovieCardClick, myCatalog, isThemeDark, toggleDarkTheme }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };