import { createContext } from "react";
import { useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider(props) {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearchQueryChange = (value) => {
        console.log(value)
        setSearchQuery(value)
    }

    const value = { searchQuery: searchQuery, handleSearchQueryChange: handleSearchQueryChange }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };