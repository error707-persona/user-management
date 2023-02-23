import axios from "axios";
import { useContext } from "react";
import AppContext from "../context/AppContext";
const SignUp = (username, email, password, role) => {
  const context = useContext(AppContext);
  axios
    .post(`http://localhost:3001/auth/signup`, {
      username: username,
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
      console.log(res.data);
      context.set(res.data.role);
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

   
};

export { SignUp };
