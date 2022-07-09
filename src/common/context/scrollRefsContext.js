import { createContext, useContext, useState } from "react";

const ScrollRefContext = createContext(null);

export const useScrollRef = () => useContext(ScrollRefContext);

export const ScrollRefProvider = ({ children }) => {
    const [refs, setRefs] = useState([]);

    const params = { refs, setRefs };
    return (
        <ScrollRefContext.Provider value={params}>{children}</ScrollRefContext.Provider>
    );
};
