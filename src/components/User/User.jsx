import {useParams} from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div>
      <h1 className="text-center text-white p-5 text-3xl bg-slate-500">  User : {id}</h1>
    </div>
  )
}

export default User
