import axios from "axios";

const DeleteUser = (email) => {
  console.log(email, "delte");
  axios
    .post(`http://localhost:3001/admin/delete`, {
      email: email,
    })
    .then((res) => {
      console.log(res);
      alert("Deleted user");
    })
    .catch((err) => {
      console.log(err);
    });
};

export { DeleteUser };
