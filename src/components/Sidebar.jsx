import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
            <div className="sidebar-header">
                <button className="expand-button" onClick={toggleSidebar}>
                    {isExpanded ? 'Collapse' : 'Exp'}
                </button>
            </div>
            <div className="sidebar-content">
                <div className="sidebar-item">
                    <span className="icon">Icon</span>
                    {isExpanded && <span className="name">Item 1</span>}
                </div>
                <div className="sidebar-item">
                    <span className="icon">Icon</span>
                    {isExpanded && <span className="name">Item 2</span>}
                </div>
                {/* Add more sidebar items as needed */}
            </div>
        </div>
    );
};

export default Sidebar;
