import Register from "./pages/Register";
import Login from "./pages/Login";
import AddUser from "./pages/AddUser";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UpdateUser from "./pages/UpdateUser";
import Employee from "./pages/Employee";
import Employees from "./pages/Employees";
import Manager from "./pages/Manager";
import AppState from "./context/AppState";
import Home from "./pages/Home";
function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/manager" element={<Manager />} />
         
        </Routes>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
