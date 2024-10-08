import React, { useState } from 'react'

const Login = () => {

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("")


    const handleClick = (e)=>{
        e.preventDefault()

    }

  return (
    <div>
        <h2>Login</h2>
        <input  onChange={(e)=> setUserName(e.target.value)} value={userName} placeholder='Enter Username...' type='text'
         className=''
        />
        <input onCanPlay={(e)=> setPassword(e.target.value)} value={password} placeholder='Enter Password...' type='password'
        className=''
        />
        <button className='bg-red-400 rounded-md' onClick={handleClick}>Sign In</button>
    </div>
  )
}

export default Login