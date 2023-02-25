import React, { createContext, useState } from 'react';

export const CityContext = createContext(null);

function CityProvider({ children }) {
    const [city, setCity] = useState("");
    const [issaved, setIssaved] = useState(false);
    const [liste, setListe] = useState([]);
    const [categories, setCategories] = useState([]);
    const [backgorundColor, setBackgorundColor] = useState('white')
    
    
    return (
        <CityContext.Provider
            value={{ city, setCity,issaved,setIssaved,liste, setListe,categories, setCategories}}
        >
            {children}
        </CityContext.Provider>
    )
}

export default CityProvider;