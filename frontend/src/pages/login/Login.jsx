
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loading, login } = useLogin()
  const handleSumbit = async (e) => {
    e.preventDefault();
    await login(username,password)
    
  }
  return (
    <div className='flex flex-col items-start justify-start min-w-96 mx-auto' > 
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
    Login
    <span className='text-indigo-700'>Ichat</span>
    </h1>
    <form  onSubmit={handleSumbit}>
      <div className='mb-3'>
        <label className='label p-2'>
          <span className='text-base label-text'>Username</span>
        </label>
        <input type="text" placeholder='Enter Username ' className='input input-bordered input-primary w-full max-w-xs'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <label className='label '>
          <span className='text-base label-text'>Password</span>
        </label>
        <input type="password" placeholder='Enter Password ' className='input input-bordered input-primary w-full max-w-xs'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link herf="#" to={"/signup"}className="link link-primary link-hover ">Don't have accout?</Link>
    <div>
    <button className='btn btn-outline btn-primary w-full' disabled={loading}>{loading ? <span className='loading loading-spinner'></span> : 'Login'}</button>
    </div>
    </form>
    
  </div>
  
  </div>)
     
    
  
}

export default Login
