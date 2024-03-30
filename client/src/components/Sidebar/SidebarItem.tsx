// SidebarItem.tsx

import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  isExpanded: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  isExpanded,
}) => {
  return (
    <div className="sidebar-item">
      <div className="icon-container">{icon}</div>
      <span className={`title ${isExpanded ? "expanded" : ""}`}>{title}</span>
    </div>
  );
};

export default SidebarItem;
