// components/AdminNavbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className='p-4 shadow flex justify-between items-center bg-cyan-500'>
      <ul className='flex flex-row gap-10'>
        <li>
          <NavLink 
            to="content" 
            className={({ isActive }) => isActive ? "text-white underline" : "text-white"}
          >
            Content
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="settings" 
            className={({ isActive }) => isActive ? "text-white underline" : "text-white"}
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="view" 
            className={({ isActive }) => isActive ? "text-white underline" : "text-white"}
          >
            View
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
