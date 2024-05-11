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
                <button className="sidebar-item">
                    <span className="icon">Icon</span>
                    {isExpanded && <span className="name">Basic Tools</span>}
                </button>
                <button className="sidebar-item">
                    <span className="icon">Icon</span>
                    {isExpanded && <span className="name">Adjustments</span>}
                </button>
                <button className="sidebar-item">
                    <span className="icon">Icon</span>
                    {isExpanded && <span className="name">Filters & Effects</span>}
                </button>
                <button className="sidebar-item">
                    <span className="icon">Icon</span>
                    {isExpanded && <span className="name">Advanced</span>}
                </button>
                <button className="sidebar-item">
                    <span className="icon">Icon</span>
                    {isExpanded && <span className="name">Text & Graphics</span>}
                </button>
                {/* Add more sidebar items as needed */}
            </div>
        </div>
    );
};

export default Sidebar;
