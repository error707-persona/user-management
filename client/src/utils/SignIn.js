import axios from "axios";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const SignIn = (email, password, role) => {
  // const context = useContext(AppContext);
  axios
    .post(`http://localhost:3001/auth/login`, {
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
      console.log(res.data);
      if (res && res.data.user.length > 0) {
        alert("user authenticated");
      
      }
      
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });


};

export { SignIn };
