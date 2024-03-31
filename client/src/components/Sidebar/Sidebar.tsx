import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import { FaHome, FaUsers, FaCog, FaSignInAlt, FaPlus, FaList } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`} onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
      <SidebarItem icon={<FaHome />} title="Home" isExpanded={isExpanded} href='/'/>
      <SidebarItem icon={<FaUsers />} title="Users" isExpanded={isExpanded} href='/'/>
      <SidebarItem icon={<FaCog />} title="Settings" isExpanded={isExpanded} href='/'/>
      <SidebarItem icon={<FaSignInAlt />} title="Login" isExpanded={isExpanded} href='/'/>
      <SidebarItem icon={<FaPlus />} title="Add" isExpanded={isExpanded} href='/add_snippet/'/>
      <SidebarItem icon={<FaList />} title="List" isExpanded={isExpanded} href='/'/>
    </div>
  );
};

export default Sidebar;


