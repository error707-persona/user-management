import React from "react";
import { GetEmployee } from "../utils/GetEmployee";

const Employee = ({email}) => {
    console.log(email, "email")
//   const data = GetEmployee(email);
  return (
    <div>
      {/* <div style={{ padding: 10 }}>
        <div>email: {data.email}</div>
        <div>username: {data.username}</div>

        <div>role: {data.role}</div>
      </div> */}
    </div>
  );
};

export default Employee;
