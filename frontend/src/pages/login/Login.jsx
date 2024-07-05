import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-start justify-start min-w-96 mx-auto' > 
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
    Login
    <span className='text-indigo-700'>Ichat</span>
    </h1>
    <form >
      <div className='mb-3'>
        <label className='label p-2'>
          <span className='text-base label-text'>Username</span>
        </label>
        <input type="text" placeholder='Enter Username ' className='input input-bordered input-primary w-full max-w-xs' />
        <label className='label '>
          <span className='text-base label-text'>Password</span>
        </label>
        <input type="text" placeholder='Enter Password ' className='input input-bordered input-primary w-full max-w-xs' />
      </div>
      <a href="#"className="link link-primary link-hover ">Don't have accout?</a>
    <div>
    <button className='btn btn-outline btn-primary w-full'>Login</button>
    </div>
    </form>
    
  </div>
  
  </div>)
     
    
  
}

export default Login
