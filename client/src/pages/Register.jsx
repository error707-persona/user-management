import React, {useState} from 'react'
import { SignUp } from '../utils/SignUp'

const Register = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [role, setrole] = useState("admin")
    const handleSubmit = () => {
        console.log(email, password,role)
        SignUp(email, password, role);
    }
  return (
    <div>
        <input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <select onChange={(e)=>setrole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="manager">manager</option>
            <option value="employee">employee</option>
        </select>
        <input type="submit" value="submit" onClick={handleSubmit}/>
    </div>
  )
}

export default Register