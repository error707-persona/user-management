import React from "react";
import { GetEmployees } from "../utils/GetEmployees";
import { NavLink } from "react-router-dom";
import { DeleteUser } from "../utils/DeleteUser";

const Employees = () => {
  const data = GetEmployees();
  
  const handleView = () => {
    
  }
  return (
    <div className="container">
    <table className="table">
     

      <tr>
        <th>Email</th>
        <th>Username</th>
        <th>Role</th>

        <th>Options</th>
      </tr>

      {data.data?.map((item) => {
        return (
          <tr>
            <td>{item.email}</td>
            <td>{item.username}</td>

            <td>{item.role}</td>
            <td>
              &nbsp;&nbsp;
              <button onClick={() => DeleteUser(item.email)}>Delete</button>
              &nbsp;&nbsp;<NavLink to="/update" state={{email:item.email}}>Edit</NavLink> &nbsp;&nbsp;
              <button onClick={handleView}>View</button>
            </td>
          </tr>
        );
      })}
    </table>
  </div>
  );
};

export default Employees;
