import axios from "axios";

const SignIn = (email, password, role) => {

  axios
    .post(`http://localhost:3001/auth/login`, {
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
      console.log(res);
      if (res && res.data.user.length > 0) {
        alert("user authenticated");
        
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Invalid email or password or designation");
    });


};

export { SignIn };
