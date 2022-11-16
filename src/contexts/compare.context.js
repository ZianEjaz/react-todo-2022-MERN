import { createContext, useState } from "react";


// as actual value
export const CompareContext  = createContext({
compare : [],
setCompareList : ()=> null
})

export const CompareProvider = ({children})=>{
    const [compareList, setCompareList] = useState([])
    const value = {compareList, setCompareList}
    return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
}
