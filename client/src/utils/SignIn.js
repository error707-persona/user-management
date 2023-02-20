import axios from "axios";
import React, { useEffect, useState } from "react";


const SignIn = (email, password, role) => {
// const navigate = useNavigate();
  var data = false;
    console.log(email, password, role, "inside")
  axios
    .post(`http://localhost:3001/auth/login`, {
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
        console.log(res);
        if (res && res.data.user.length>0){
          alert("user authenticated")
        }
        // 
       

    
    })
    .catch((err) => {
      console.log(err);
      alert("Invalid email or password or designation")
    });

    return data;

 
};

export { SignIn };
