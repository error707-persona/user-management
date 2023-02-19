import React, {useState} from 'react'
import { SignIn } from '../utils/SignIn'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [role, setrole] = useState("admin")
    const handleSubmit = () => {
        SignIn(email, password, role);
    }
  return (
    <div>
        <input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <select onChange={(e)=>setrole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
        </select>
        <input type="submit" value="submit" onClick={handleSubmit}/>
    </div>
  )
}

export default Login