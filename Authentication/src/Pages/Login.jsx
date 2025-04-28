import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const{token,handleLogin}=useContext(AuthContext)
  console.log(token,"Token")

  const handleSubmit=(e)=>{
    e.preventDefault()

    axios.post('https://reqres.in/api/login',{email,password})
    .then((res)=>{
      handleLogin(res.data.token);
      console.log(res)
    })
    
    .catch((err)=>console.log(err))
  
  }

  return (
    <div style={{width:"20%",height:"350px"  , border:"1px solid black" , margin:"auto",textAlign:"center",alignItems:"center" , padding:"20px"} } className='mt-5'>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
          <h1>Sign In</h1>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/> <br /><br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/><br /><br />
            <input type="submit" style={{marginTop:"30px"}}/>
        </form>
    </div>
  )
}

export default Login