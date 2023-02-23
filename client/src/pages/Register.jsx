import React, {useState} from 'react'
import { redirect } from 'react-router-dom'
import { SignUp } from '../utils/SignUp'

const Register = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [role, setrole] = useState("admin")
    const handleSubmit = () => {
      
        const current_role = SignUp(username,email, password, role);
        
        if (current_role==="admin") redirect("/dashboard")
        else if (current_role==="manager") redirect("/employees")
        else redirect("/employee")

    }
  return (
    <div className='container'>
      <div className="form">
        <h3>Register</h3>
         <input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
         <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <select onChange={(e)=>setrole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="manager">manager</option>
            <option value="employee">employee</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </div>
       
    </div>
  )
}

export default Register