import { createContext } from "react";

const defaultState={
    tab:1,
    bike:{
        quadro:1,
        cor:1,
        tam:1
    },
    extras:[],
    velaMais:false
}

const VelaContext=createContext(defaultState)

export default VelaContext