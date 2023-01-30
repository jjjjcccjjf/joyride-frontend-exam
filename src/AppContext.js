import { createContext } from "react";
import { useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider(props) {
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")
    const [myCatalog, setMyCatalog] = useState([])

    const isCatalogExists = (newItem) => {
        return myCatalog.some(item => item.imdbID === newItem.imdbID);
    }

    const handleMovieCardClick = (details) => {
        if (!isCatalogExists(details)) {
            setMyCatalog([...myCatalog, {...details, state: 'favorite'}]);
        } else {

        }
    }

    const value = { debouncedSearchQuery, setDebouncedSearchQuery, handleMovieCardClick }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };