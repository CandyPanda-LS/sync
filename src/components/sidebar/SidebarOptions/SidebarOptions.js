import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ Icon, title }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className="sidebarOptions__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOptions;
