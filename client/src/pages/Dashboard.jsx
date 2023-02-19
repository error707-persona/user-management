import React from "react";
import { GetUsers } from "../utils/GetUsers";
const Dashboard = () => {
   const data = GetUsers().data;
  return (
    <div className="dashboard">
      <table className="table">
        <tr>
          {/* <th>Username</th> */}
          {/* <th>Name</th> */}
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
        </tr>

        {data?.map((item) => {
          <tr>
            
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.role}</td>
          </tr>
        })}
      </table>
    </div>
  );
};

export default Dashboard;
