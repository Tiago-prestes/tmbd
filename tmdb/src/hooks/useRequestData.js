import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url, when) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        getRequest()
    },[when])



    const getRequest = () => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    return (data)
}

export default useRequestData
