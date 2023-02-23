import React, {useState} from 'react'
import { redirect } from 'react-router-dom'
import { SignIn } from '../utils/SignIn'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [role, setrole] = useState("admin")
    const handleSubmit = () => {
        SignIn(username, email, password, role);
        redirect('/employee')
    }
  return (
    <div className='container'>
      <div className="form">
        <h3>Login</h3>
         <input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
         <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <select onChange={(e)=>setrole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
        </select>
        <button onClick={handleSubmit}>Login</button> 
      </div>
       
    </div>
  )
}

export default Login