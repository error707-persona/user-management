import React from "react";
import { NavLink } from "react-router-dom";
import { GetUsers } from "../utils/GetUsers";
const Dashboard = () => {
   const data = GetUsers().data;
   console.log(data);
   
  return (
    <div className="container">
      
      <table className="table">
        <tr>
          <td> <NavLink to="/addUser">Add</NavLink></td>
        </tr>
       
        <tr>
        
          <th>Email</th>
          <th>Username</th>
          <th>Role</th>
          
          <th>Options</th>
        </tr>

        {data?.map((item) => {
         return ( <tr>
            
            <td>{item.email}</td>
            <td>{item.username}</td>
            
            <td>{item.role}</td>
            <td>&nbsp;&nbsp;<button>Delete</button>&nbsp;&nbsp;<NavLink to="/update">Edit</NavLink></td>

          </tr>)
        })}
      </table>
    </div>
  );
};

export default Dashboard;
