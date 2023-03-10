import React, {useState} from 'react'
import {SignUp} from "../utils/SignUp"

const AddUser = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [role, setrole] = useState("admin")
    const handleSubmit = () => {
        // console.log(email, password,role)
        SignUp(username,email, password, role);
    }
  return (
    <div className='container'>
      <div className="form">
        <h3>Create User</h3>
         <input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
         <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <select onChange={(e)=>setrole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Add User</button>
      </div>
    </div>
  )
}

export default AddUser