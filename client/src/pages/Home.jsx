import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h3>Home</h3>
        <div>
            <NavLink to="/register">SignUp</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>

    </div>
  )
}

export default Home