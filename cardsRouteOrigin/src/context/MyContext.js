import { createContext, useState, useEffect} from "react";
import GetServices from "../services/GetServices";



export const MyContext = createContext(); //хранилище

//пишем следующее для того, чтобы изменять контекст
export const ContextProvider = ({children}) => {
    const [valueContext, setValueContext] = useState([])
    const values = {valueContext, setValueContext}
    
    const getWords = async () => {
        const words = await GetServices.getWords()
        setValueContext(words)
        console.log(words)
    }

    useEffect(()=> {
        getWords()
    }, [])

    return (

        <MyContext.Provider value= {values}>
            {children}
        </MyContext.Provider>
    )
}
