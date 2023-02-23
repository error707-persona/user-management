import React from "react";

import { useLocation } from "react-router-dom";
const Employee = () => {
  const { state } = useLocation();
  const {email, username, role} = state;
  return (
    <div>
        <div style={{ padding: 10 }}>
            <div>email: {email}</div>
            <div>username: {username}</div>

            <div>role: {role}</div>
        </div>
    </div>
  );
};

export default Employee;
