/* eslint-disable no-undef */

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "./AuthProvider";



const Navbar = () => {
    const {user,singOutUser}=useContext(authContext)
    // console.log(user);
    
    const links=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/profile'>User Profile</NavLink></li>
    <li><NavLink to='/update'>Update Profile</NavLink></li>
   
    </>
      const handleSingOut=()=>{
        singOutUser();
        then((result)=>{
          
        })
        .catch(error=>{
         
          
        })
      } 
    
    
    return (
        <div className="navbar bg-[#BEE3E2]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold text-[#1E2A47]">EC0-ADVENTURE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <>
      <div><img src={user.photoURL} alt="User Avatar" className="w-12 h-12 rounded-full" title={user.displayName || 'User'} /></div>
        
        <a onClick={handleSingOut} className="btn ml-2 bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white">Sing Out</a>
      </> :
      <button className="btn w-20  bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white" ><Link to='/login'>Login</Link></button>
    }
  </div>
</div>
    );
};

export default Navbar;
