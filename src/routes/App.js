import React,{useState, useEffect} from "react";
import Login from "../pages/login";
import Home from "../pages/home";
import Protect from "../pages/protected";
import { Routes, Route, Outlet, Link } from "react-router-dom";


const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [users, setUsers] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
  }, [user]);

  async function fetchUsers() {
    const response = await fetch("http://localhost:5000/users");
    setUsers(await response.json());
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Login users={users} changeUser={setUser} changeLogin={setIsLogin} isLogin={isLogin}/>} />
        <Route path="/home" element={<Protect isLogin={isLogin}><Home users={users} user={user} /></Protect>} />
        <Route path="*" element={<Protect isLogin={isLogin}><Home users={users} user={user}/></Protect>} />
      </Routes>
    </>
  );
};
export default App;
