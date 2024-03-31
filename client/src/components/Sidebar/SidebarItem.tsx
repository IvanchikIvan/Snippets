import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  isExpanded: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  isExpanded,
  href,
}) => {
  return (
    <Link to={href} className="sidebar-item">
      <div className="icon-container">{icon}</div>
      <span className={`title ${isExpanded ? 'expanded' : ''}`}>{title}</span>
    </Link>
  );
};

export default SidebarItem;
