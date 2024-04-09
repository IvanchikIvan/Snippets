import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import { FaHome, FaUsers, FaCog, FaSignInAlt, FaPlus, FaList } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {


  return (
    <div className='sidebar' >
      <SidebarItem icon={<FaHome />} title="Home" href='/'/>
      <SidebarItem icon={<FaUsers />} title="Users" href='/'/>
      <SidebarItem icon={<FaCog />} title="Settings" href='/'/>
      <SidebarItem icon={<FaSignInAlt />} title="Login" href='/'/>
      <SidebarItem icon={<FaPlus />} title="Add" href='/add_snippet/'/>
      <SidebarItem icon={<FaList />} title="List" href='/'/>
    </div>
  );
};

export default Sidebar;


