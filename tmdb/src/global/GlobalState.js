import React, { useState } from "react"
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [page, setPage] = useState(1)
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    const data = { page, setPage, isUserSignedIn, setIsUserSignedIn }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState