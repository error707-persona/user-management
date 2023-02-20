import React, {useState} from 'react'
import { EditUser } from '../utils/EditUser'
import { redirect } from 'react-router-dom'

const UpdateUser = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [role, setrole] = useState("admin")
    const handleSubmit = () => {
       
        // EditUser(username,email, password, role);
        return redirect('/dashboard')
    }
  return (
    <div className='container'>
      <div className="form">
        <h3>Update User</h3>
         <input type="email" placeholder="Email" value="noble@hol.com" disabled onChange={(e)=>setemail(e.target.value)}/>
         <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
        <select onChange={(e)=>setrole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Update</button>
      </div>
    </div>
  )
}

export default UpdateUser