import React from 'react'
import { NavLink } from "react-router-dom";

function sidebar() {
  return (
    <div>
      <aside className="w-60 bg-gray-900 text-white p-4 h-full">
      <h2 className="text-lg mb-4 font-semibold">Menu</h2>

      <ul className="space-y-3">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
           <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
             <NavLink to="/about">About</NavLink>
        </li>
         <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
             <NavLink to="/admin">Admin</NavLink>
        </li>
         <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
             <NavLink to="/auth">Authentication</NavLink>
        </li>
      </ul>
    </aside>
    </div>
  )
}

export default sidebar
