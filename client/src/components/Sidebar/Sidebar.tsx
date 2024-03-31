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
      <SidebarItem icon={<FaHome />} title="Home" isExpanded={isExpanded} />
      <SidebarItem icon={<FaUsers />} title="Users" isExpanded={isExpanded} />
      <SidebarItem icon={<FaCog />} title="Settings" isExpanded={isExpanded} />
      <SidebarItem icon={<FaSignInAlt />} title="Login" isExpanded={isExpanded} />
      <SidebarItem icon={<FaPlus />} title="Add" isExpanded={isExpanded} />
      <SidebarItem icon={<FaList />} title="List" isExpanded={isExpanded} />
    </div>
  );
};

export default Sidebar;


