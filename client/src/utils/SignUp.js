import axios from "axios";

const SignUp = (username, email, password, role) => {
  axios
    .post(`http://localhost:3001/auth/signup`, {
      username: username,
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
      console.log(res);
      alert("User added successfully");
    })
    .catch((err) => {
      console.log(err);
      alert("Invalid email or password");
    });
};

export { SignUp };
