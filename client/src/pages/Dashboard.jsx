import React,{useContext} from "react";
import { Navigate, NavLink, redirect } from "react-router-dom";
import { DeleteUser } from "../utils/DeleteUser";
import { GetUsers } from "../utils/GetUsers";
import UpdateUser from "../pages/UpdateUser"
import AppContext from "../context/AppContext";
const Dashboard = () => {
  const data = GetUsers().data;


  const handleView = () => {
    window.location.href = "/employee"
  }




  return (
    <div className="container">
      <table className="table">
        <tr>
          <td>
            {" "}
            <NavLink to="/addUser">Add</NavLink>
          </td>
        </tr>

        <tr>
          <th>Email</th>
          <th>Username</th>
          <th>Role</th>

          <th>Options</th>
        </tr>

        {data?.map((item) => {
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

export default Dashboard;
