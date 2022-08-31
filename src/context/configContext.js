import { createContext,useContext,useState,useEffect } from "react";
import axios from "axios";
import Cookie from 'js-cookie';

export const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({children}) => {

    const [config,setConfig] = useState(null)

    return (
        <ConfigContext.Provider value={{config,setConfig}}>
            {children}
        </ConfigContext.Provider>
    )
}
