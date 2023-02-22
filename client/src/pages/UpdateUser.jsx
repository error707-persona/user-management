import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { EditUser } from "../utils/EditUser";

const UpdateUser = () => {
  const { state } = useLocation();
  const email = state.email;

  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [role, setrole] = useState("admin");

  console.log(email, "got email");

  const handleSubmit = () => {
    EditUser(username, email, password, role);
  };
  return (
    <div className="container">
      <div className="form">
        <h3>Update User</h3>
        <input type="email" placeholder="Email" value={email} disabled />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <select onChange={(e) => setrole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="employee">Employee</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
