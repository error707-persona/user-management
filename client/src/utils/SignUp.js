import axios from "axios";
import { useState } from "react";
const SignUp = (username, email, password, role) => {
  // const [data, setdata] = useState("");
  axios
    .post(`http://localhost:3001/auth/signup`, {
      username: username,
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
      console.log(res.data);
      // setdata(res.data.role);
      alert("User added successfully");

      if (res.data.role === "admin")
      {
        window.location.href = "/dashboard" 
      }
      else if (res.data.role === "manager") {
        window.location.href = "/employees" 
      }
      else {
        window.location.href = "/employee" 
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Invalid email or password");
    });

    // return data;
};

export { SignUp };
