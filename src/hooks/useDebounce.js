import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useDebounce = (apiCall, delay = 500) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const debouncedApiCall = debounce(apiCall, delay);

        debouncedApiCall(inputValue);

        return () => {
            debouncedApiCall.cancel();
        };
    }, [apiCall, delay, inputValue]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return [inputValue, handleInputChange];
};

export default useDebounce;