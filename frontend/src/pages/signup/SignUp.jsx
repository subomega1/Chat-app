import React from 'react'
import GenderBox from './genderBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup.js'
const SignUp = () => {
  
    const [inputs , setInput] = useState({
      fullName:'',
      username:'',
      password:'',
      confirmPassword: '',
      gender:''
    } );
    const {signup , loading} = useSignup()
    const handleSubmit = async  (e) => {
      e.preventDefault();
      await signup(inputs)
    }
    const handleGenderCheckBox = (gender) => {
      setInput({...inputs, gender})
      
    }
  return (
   
   <div className='flex flex-col items-start justify-start min-w-96 mx-auto' > 
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
    Signup
    <span className='text-indigo-700'>Ichat</span>
    </h1>
    <form onSubmit={handleSubmit} >
      <div className='mb-3'>
        <label className='label p-2'>
          <span className='text-base label-text'>Full Name</span>
        </label>
        <input type="text" placeholder='Enter Fullname ' className='input input-bordered input-primary w-full max-w-xs' value={inputs.fullName} 
        onChange={ (e) => setInput({...inputs ,fullName :e.target.value})}
        />
        <label className='label '>
          <span className='text-base label-text'>Username</span>
        </label>
        <input type="text" placeholder='Enter Username ' className='input input-bordered input-primary w-full max-w-xs' value={inputs.username}
        onChange={ (e) => setInput({...inputs ,username :e.target.value})}/>
        <label className='label '>
          <span className='text-base label-text'>Password</span>
        </label>
        <input type="password" placeholder='Enter Password ' className='input input-bordered input-primary w-full max-w-xs' value={inputs.password}
        onChange={ (e) => setInput({...inputs ,password :e.target.value})} />
        <label className='label '>
          <span className='text-base label-text'>Confirme Password</span>
        </label>
        <input type="password" placeholder='Enter Password ' className='input input-bordered input-primary w-full max-w-xs' value={inputs.confirmPassword}
        onChange={ (e) => setInput({...inputs ,confirmPassword :e.target.value})} />
      </div>
       
      <GenderBox onChangeBox={handleGenderCheckBox} selectedGender={inputs.gender} />
      
      <Link to = {"/login"} href="#"className="link link-primary link-hover mt-2 ">Alrady have an accout?</Link>
    <div>
    <button className='btn btn-outline btn-primary w-full mt-2'
    disabled={loading}>
      {loading ? <span className='loading loading-spinner'></span>:'Signup'}
    </button>
    </div>
    </form>
    
  </div>
  
  </div>
    )
}

export default SignUp
