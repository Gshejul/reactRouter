// import {useState , useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData()

    // First way 
    // const [data, setData] = useState([])
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    //     .catch(err => console.log("error in fetching data" , err))
    // }, [])

  return (
    <div>
      <h1 className="text-center m-5 p-5 text-3xl">GitHub follower : {data.followers}</h1>
      <img src={data.avatar_url} alt="git picture" />
    </div>
  )
}

export default GitHub

// second way it improve the lag and provides more efficiency
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}