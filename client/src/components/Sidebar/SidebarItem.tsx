import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  href,
}) => {
  return (
    <Link to={href} className="sidebar-item">
      <div className="icon-container">{icon}</div>
      <span className='title'>{title}</span>
    </Link>
  );
};

export default SidebarItem;
