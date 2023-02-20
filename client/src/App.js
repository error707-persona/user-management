import Register from "./pages/Register";
import Login from "./pages/Login";
import AddUser from "./pages/AddUser";
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UpdateUser from "./pages/UpdateUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/update" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
