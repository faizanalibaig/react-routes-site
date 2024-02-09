import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Github() {
    const [data, setData]=useState([])

    useEffect(()=>{
        (async()=>{
                try {
                  const response=await axios.get('https://api.github.com/users/tauseef-creator')
                  console.log(response.data)
                  setData(response.data)
                } catch (error) {
                  console.log("error")
                }
               })()
    },[])

    //

  return (
    <div>Github followers: {data.followers}</div>
  )
}

export default Github