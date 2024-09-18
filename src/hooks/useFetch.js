import { useEffect, useState } from "react"

const useFetch=(url)=>{
    const [data,setData]=useState()
    useEffect(()=>{
      fetch(url).then(res=>{
        res.json().then(result=>{
              setData(result)
        })
      })
    },[])
    return data;
}
export default useFetch;