import React from "react"
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    const data = 'valor temporario'

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState